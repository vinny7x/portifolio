
import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css"

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

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="">
        {children}
      </body>
    </html>
  );
}
