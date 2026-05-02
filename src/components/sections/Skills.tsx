import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconCode,
  IconBrandNodejs,
  IconServer,
  IconDatabase,
  IconRocket,
  IconBrandGit,
  IconBrandUbuntu,
  IconBrandVercel,
  IconBrandNextjs,
  IconBrandMongodb,
  IconSql,
  IconBrandCpp,
  IconBrandJavascript,
  IconBrandPython,
  IconCoffee,
  IconBrandPhp,
  IconNetwork,
  IconBrandHtml5,
  IconBrandCss3,
} from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

type SkillItem = {
  name: string;
  icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> & { strokeWidth?: number }
  >;
};

type SkillGroup = {
  category: string;
  items: SkillItem[];
};

const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: IconBrandHtml5 },
      { name: "CSS", icon: IconBrandCss3 },
      { name: "React", icon: IconBrandReact },
      { name: "TypeScript", icon: IconBrandTypescript },
      { name: "NextJS", icon: IconBrandNextjs },
      { name: "Tailwind CSS", icon: IconBrandTailwind },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: IconBrandJavascript },
      { name: "Python", icon: IconBrandPython},
      { name: "C/C++", icon: IconBrandCpp },
      { name: "Java", icon: IconCoffee },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: IconBrandNodejs },
      { name: "Express", icon: IconServer },
      { name: "REST APIs", icon: IconNetwork },
      { name: "PHP", icon: IconBrandPhp },
      
    ],
  },
  {
    category: "Data & Storage",
    items: [
      { name: "MongoDB", icon: IconBrandMongodb },
      { name: "MySQL", icon: IconSql },
      { name: "Postgres", icon: IconDatabase },
    ],
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "GSAP", icon: IconCode },
      { name: "Vite", icon: IconRocket },
      { name: "Git", icon: IconBrandGit },
      { name: "Vercel", icon: IconBrandVercel },
      { name: "Linux", icon: IconBrandUbuntu },
    ],
  },
];

export function Skills() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const categories = gsap.utils.toArray(".skill-category");

      categories.forEach((cat: any, i: number) => {
        gsap.fromTo(
          cat,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cat,
              start: "top 85%",
            },
          },
        );
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="skills"
      className="py-16 md:py-24 lg:py-40 px-6 md:px-12 lg:px-16 bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8">
        <div className="xl:col-span-4 relative mb-12 xl:mb-0">
          <span className="absolute -top-8 md:-top-10 -left-2 md:-left-4 text-[80px] md:text-[100px] lg:text-[120px] font-display font-black text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-10 leading-none select-none z-0">
            02
          </span>
          <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-accent text-ink dark:text-paper pt-6 md:pt-8">
            Capabilities
          </h2>
        </div>
        <div className="xl:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {SKILLS.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tighter mb-4 md:mb-6 border-b border-ink/10 dark:border-paper/10 pb-3 md:pb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-4 font-mono text-sm">
                  {skillGroup.items.map((item, i) => (
                    <li
                      key={i}
                      className="cursor-tag flex items-center gap-4 text-ink/80 dark:text-paper/80 w-fit group"
                    >
                      <item.icon
                        strokeWidth={1.5}
                        className="w-5 h-5 text-ink/50 dark:text-paper/50 group-hover:text-ink dark:group-hover:text-paper transition-colors duration-300"
                      />
                      <span className="group-hover:text-ink dark:group-hover:text-paper transition-colors duration-300">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
