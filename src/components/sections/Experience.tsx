import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    id: 1,
    role: "Data Engineer",
    company: "TATA Consultancy Services Ltd.",
    period: "2024 — Present",
    description:
      "Working as a Data Engineer, building scalable data pipelines and processing systems on Azure. Focused on data ingestion, transformation, and automation to enable reliable and efficient data workflows.",
  },
];

export function Experience() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".exp-item");

      items.forEach((item: any, i: number) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
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
      id="experience"
      className="py-16 md:py-24 lg:py-40 px-6 md:px-12 lg:px-16 bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8">
        <div className="xl:col-span-4 relative mb-12 xl:mb-0">
          <span className="absolute -top-8 md:-top-10 -left-2 md:-left-4 text-[80px] md:text-[100px] lg:text-[120px] font-display font-black text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-10 leading-none select-none z-0">
            03
          </span>
          <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-accent text-ink dark:text-paper pt-6 md:pt-8">
            Experience
          </h2>
        </div>
        <div className="xl:col-span-8">
          <div className="space-y-16">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="exp-item group relative">
                <div className="absolute -left-8 md:-left-12 top-2 w-2 h-2 bg-ink dark:bg-paper rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter">
                    {exp.role}
                  </h3>
                  <span className="font-mono text-sm text-ink/50 dark:text-paper/50">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-2xl md:text-3xl font-accent mb-6 text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-100">
                  {exp.company}
                </h4>

                <p className="text-lg font-medium text-ink/80 dark:text-paper/80 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
