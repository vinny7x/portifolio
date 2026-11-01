import { CodeXmlIcon, GraduationCapIcon } from "lucide-react";

import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection
        id="home"
        eyebrow="Desenvolvedor Full Stack"
        title="Olá, eu sou o"
        highlight="Vinny"
        description="Gosto de transformar ideias em aplicações web, criando experiências intuitivas e soluções que unem funcionalidade, desempenho e uma boa experiência para quem usa."
         education={[
          {
            icon: <GraduationCapIcon className="size-4" />,
            title: "Engenharia de Software",
            institution: "Gran Faculdade",
          },
          {
            icon: <CodeXmlIcon className="size-4" />,
            title: "Dev. Full Stack Jr",
            institution: "+praTi & Codifica",
          },
        ]}
        image={{
          src: "/images/profile.jpg",
          alt: "Imagem de perfil",
          priority: true,
        }}
      />
      <AboutSection />
    </main>
  );
}
