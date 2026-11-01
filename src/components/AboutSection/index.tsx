
import {
  BookOpenIcon,
  CodeXmlIcon,
  LayersIcon,
  SparklesIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: CodeXmlIcon,
    title: "Desenvolvimento Full Stack",
    description:
      "Gosto de trabalhar em diferentes etapas de uma aplicação, explorando tanto a experiência visual quanto sua lógica e funcionamento interno.",
    featured: true,
  },
  {
    icon: LayersIcon,
    title: "Exploração tecnológica",
    description:
      "Tenho curiosidade por novas ferramentas, arquiteturas e tecnologias que ampliam as possibilidades de desenvolvimento.",
    featured: false,
  },
  {
    icon: BookOpenIcon,
    title: "Aprendizado contínuo",
    description:
      "Cada projeto é uma oportunidade de aprender, testar ideias, enfrentar desafios e aprimorar minhas habilidades.",
    featured: false,
  },
];

export type AboutSectionProps = {
  id?: string;
  className?: string;
};

export function AboutSection({
  id = "about",
  className,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase backdrop-blur">
            <SparklesIcon className="size-3.5 text-blue-600 dark:text-blue-400" />
            Sobre mim
          </span>

          <h2 className="mt-5 max-w-md text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl">
            Um pouco da minha{" "}
            <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              trajetória
            </span>
          </h2>

          <div className="mt-6 flex max-w-xl flex-col gap-4 text-base leading-relaxed text-pretty text-muted-foreground">
            <p>
              Sou o Vinny, estudante de Engenharia de Software e entusiasta de
              tecnologia. Gosto de entender como as coisas funcionam e
              transformar ideias em aplicações que tenham utilidade e façam
              sentido para quem usa.
            </p>

            <p>
              Tenho interesse pelo desenvolvimento Full Stack e gosto de
              explorar diferentes partes de uma aplicação, desde a construção
              de interfaces até a lógica do servidor, APIs e bancos de dados.
              Meus projetos são uma forma de colocar ideias em prática,
              experimentar tecnologias e aprender durante o processo.
            </p>

            <p>
              Para mim, programar também é estar sempre aprendendo. Busco
              compreender as ferramentas que utilizo, melhorar minhas decisões
              técnicas e encontrar maneiras de desenvolver soluções cada vez
              melhores.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-6 backdrop-blur transition-colors duration-300 hover:border-blue-500/30 hover:bg-card/70",
                  pillar.featured && "sm:col-span-2",
                )}
              >
                {pillar.featured && (
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent"
                  />
                )}

                <span className="flex size-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 transition-colors duration-300 group-hover:bg-blue-500/15 dark:text-blue-400">
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {pillar.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
