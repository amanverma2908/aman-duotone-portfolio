import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const texts = gsap.utils.toArray(".about-text");

      texts.forEach((text: any) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
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
      id="about"
      className="py-16 md:py-24 lg:py-40 px-6 md:px-12 lg:px-16 bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8">
        <div className="xl:col-span-4 relative mb-12 xl:mb-0">
          <span className="absolute -top-8 md:-top-10 -left-2 md:-left-4 text-[80px] md:text-[100px] lg:text-[120px] font-display font-black text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-10 leading-none select-none z-0">
            01
          </span>
          <h2 className="about-text relative z-10 text-4xl md:text-5xl lg:text-6xl font-accent text-ink dark:text-paper pt-6 md:pt-8">
            About
          </h2>
        </div>
        <div className="xl:col-span-8">
          <h3 className="about-text text-2xl md:text-4xl lg:text-6xl font-display font-black uppercase leading-[0.9] tracking-tighter mb-8 md:mb-12">
            Bridging the gap between{" "}
            <span className="font-accent lowercase text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-90">
              design
            </span>{" "}
            and{" "}
            <span className="font-accent lowercase text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-90">
              code
            </span>
            .
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-medium text-ink/80 dark:text-paper/80 leading-relaxed">
            <p className="about-text">
              Full-stack developer building clean, scalable, and performant web
              applications. Focused on simplicity, structure, and long-term
              maintainability.{" "}
            </p>
            <p className="about-text">
              I work across the stack—engineering backend systems and crafting
              smooth frontend experiences with equal attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
