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
    default: "Vinny7x | Desenvolvedor Full Stack",
    template: "%s | Vinny7x",
  },
  description:
    "Portfólio de Vinny7x, desenvolvedor Full Stack focado na criação de aplicações web modernas.",
  keywords: [
    "Vinny7x",
    "Desenvolvedor Full Stack",
    "Desenvolvimento Web",
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
