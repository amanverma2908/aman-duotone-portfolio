import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray('.contact-anim');

      elements.forEach((el: any, i: number) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="contact"
      className="py-16 md:py-24 lg:py-40 px-6 md:px-12 lg:px-16 bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8">
        <div className="xl:col-span-4 relative mb-12 xl:mb-0">
          <span className="absolute -top-8 md:-top-10 -left-2 md:-left-4 text-[80px] md:text-[100px] lg:text-[120px] font-display font-black text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-10 leading-none select-none z-0">
            06
          </span>
          <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-accent text-ink dark:text-paper pt-6 md:pt-8">
            Contact
          </h2>
        </div>
        <div className="xl:col-span-8">
          <h3 className="contact-anim mb-8 text-3xl font-display font-black uppercase leading-[1.05] tracking-normal md:mb-12 md:text-5xl md:leading-none lg:text-8xl lg:leading-[0.95]">
            Let's build <br />
            <span className="font-accent lowercase text-transparent opacity-90 [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)]">
              something
            </span>
            <br />
            together.
          </h3>

          <div className="contact-anim flex flex-col md:flex-row gap-8 md:gap-16 mt-16">
            <a
              href="mailto:amanverma.works@gmail.com"
              className="group flex items-center gap-4 break-all text-base font-display font-bold leading-snug tracking-normal transition-colors hover:text-ink/60 dark:hover:text-paper/60 sm:break-normal md:text-xl"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              amanverma.works@gmail.com
            </a>

            <div className="flex gap-8">
              <a href="https://github.com/amanverma2908" target="_blank" rel="noreferrer" className="hover:text-ink/60 dark:hover:text-paper/60 transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com/in/midnightcoder" target="_blank" rel="noreferrer" className="hover:text-ink/60 dark:hover:text-paper/60 transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="https://twitter.com/midnightcoder" target="_blank" rel="noreferrer" className="hover:text-ink/60 dark:hover:text-paper/60 transition-colors">
                <Twitter className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
