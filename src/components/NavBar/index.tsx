"use client";

import { useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const navigationItems = [
  { id: "home", label: "Início", href: "#home" },
  { id: "about", label: "Sobre", href: "#about" },
  { id: "projects", label: "Projetos", href: "#projects" },
  { id: "contact", label: "Contato", href: "#contact" },
] as const;

type NavigationItem = (typeof navigationItems)[number]["id"];

type Indicator = {
  left: number;
  width: number;
};

export function NavBar() {
  const [activeItem, setActiveItem] = useState<NavigationItem>("home");
  const [indicator, setIndicator] = useState<Indicator | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<NavigationItem, HTMLAnchorElement | null>>({
    home: null,
    about: null,
    projects: null,
    contact: null,
  });

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const list = listRef.current;
      const activeElement = itemRefs.current[activeItem];

      if (!list || !activeElement) return;

      const listRect = list.getBoundingClientRect();
      const itemRect = activeElement.getBoundingClientRect();

      setIndicator({
        left: itemRect.left - listRect.left,
        width: itemRect.width,
      });
    };

    updateIndicator();

    const resizeObserver = new ResizeObserver(updateIndicator);
    if (listRef.current) resizeObserver.observe(listRef.current);
    if (itemRefs.current[activeItem]) {
      resizeObserver.observe(itemRefs.current[activeItem]);
    }
    window.addEventListener("resize", updateIndicator);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeItem]);

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <ul
        ref={listRef}
        className="relative flex items-center gap-1 rounded-full border border-border/60 bg-background/70 p-1.5 shadow-lg backdrop-blur-md"
      >
        {indicator && (
          <span
            aria-hidden="true"
            className="absolute top-1.5 bottom-1.5 rounded-full bg-primary shadow-sm transition-[left,width] duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
        )}

        {navigationItems.map((item) => {
          const isActive = activeItem === item.id;

          return (
            <li key={item.id} className="relative z-10">
              <a
                ref={(element) => {
                  itemRefs.current[item.id] = element;
                }}
                href={item.href}
                onClick={() => setActiveItem(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
