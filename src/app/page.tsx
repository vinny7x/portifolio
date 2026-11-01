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
        description="Desenvolvo aplicações web modernas, rápidas e acessíveis, unindo interfaces bem cuidadas a uma base sólida de engenharia."
        image={{
          src: "/images/profile.jpg",
          alt: "Imagem de perfil",
          priority: true,
        }}
      />
    </main>
  );
}
