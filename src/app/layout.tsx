import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";

import ThemeProvider from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vinny7x | Desenvolvedor e entusiasta de tecnologia",
    template: "%s | Vinny7x",
  },
  description:
    "Oi, sou Vinny! Desenvolvo aplicações web, exploro novas tecnologias e transformo ideias em projetos. Conheça um pouco do meu trabalho.",
  keywords: [
    "Vinny7x",
    "Desenvolvedor Web",
    "Desenvolvimento Full Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geist.variable,
        spaceGrotesk.variable,
        geistMono.variable,
        "font-sans",
        "scroll-smooth"
      )}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
