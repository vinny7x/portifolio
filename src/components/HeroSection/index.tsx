import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type HeroSectionImage = {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
};

export type HeroSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  image?: HeroSectionImage;
  actions?: ReactNode;
  className?: string;
};

export function HeroSection({
  id,
  eyebrow,
  title,
  highlight,
  description,
  image,
  actions,
  className,
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden px-6 pt-36 pb-20 sm:px-10 lg:px-16",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div
        className={cn(
          "mx-auto grid w-full max-w-6xl items-center gap-12",
          image && "lg:grid-cols-2",
        )}
      >
        <div className="flex flex-col items-start">
          {eyebrow && (
            <span className="mb-5 inline-flex items-center rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase backdrop-blur">
              {eyebrow}
            </span>
          )}

          <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}{" "}
            {highlight && (
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {description}
          </p>

          {actions && (
            <div className="mt-9 flex flex-wrap items-center gap-3">{actions}</div>
          )}
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-transparent blur-2xl"
            />

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border/60 bg-card/60 shadow-2xl backdrop-blur">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={image.priority}
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroSection;
