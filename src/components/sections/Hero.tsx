import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set(".hero-line-v", { scaleY: 0, transformOrigin: "top" });
      gsap.set(".hero-line-h", { scaleX: 0, transformOrigin: "left" });
      gsap.set(".hero-text", { y: 50, opacity: 0 });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.95 });

      tl.to(".hero-line-v", { scaleY: 1, duration: 1.5, stagger: 0.1 })
        .to(".hero-line-h", { scaleX: 1, duration: 1.5, stagger: 0.1 }, "-=1.2")
        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
          },
          "-=1",
        )
        .to(
          ".hero-text",
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
          },
          "-=1",
        );

      // Parallax Effects
      // Image moves slightly down (slower scroll)
      gsap.to(imageRef.current, {
        y: 72,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text moves slightly up (faster scroll)
      gsap.to(textContainerRef.current, {
        y: -48,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-paper px-4 py-20 dark:bg-ink md:px-6 md:py-24"
    >
      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-line hero-line-v absolute left-1/4 top-0 bottom-0 w-px bg-ink/10 dark:bg-paper/10" />
        <div className="hero-line hero-line-v absolute left-1/2 top-0 bottom-0 w-px bg-ink/10 dark:bg-paper/10" />
        <div className="hero-line hero-line-v absolute left-3/4 top-0 bottom-0 w-px bg-ink/10 dark:bg-paper/10" />
        <div className="hero-line hero-line-h absolute top-1/4 left-0 right-0 h-px bg-ink/10 dark:bg-paper/10" />
        <div className="hero-line hero-line-h absolute top-3/4 left-0 right-0 h-px bg-ink/10 dark:bg-paper/10" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-0 border border-ink/10 dark:border-paper/10 lg:grid-cols-12">
        {/* Image Section */}
        <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden border-b border-ink/10 bg-paper p-4 dark:border-paper/10 dark:bg-ink sm:p-6 md:min-h-[440px] lg:col-span-5 lg:min-h-0 lg:border-b-0 lg:border-r lg:p-8">
          {/* Backdrop Shadow */}
          <div className="hero-backdrop-shadow absolute inset-0 pointer-events-none opacity-0 blur-2xl z-10 bg-[radial-gradient(circle_150px_at_var(--x,50%)_var(--y,50%),rgba(0,0,0,0.2)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_150px_at_var(--x,50%)_var(--y,50%),rgba(0,0,0,0.8)_0%,transparent_100%)] transition-opacity duration-500" />

          <div
            ref={imageRef}
            className="hero-image-container relative z-20 flex aspect-[3/4] w-full max-w-[280px] items-center justify-center overflow-hidden border border-ink/20 bg-paper shadow-2xl transition-all duration-700 ease-out dark:border-paper/20 dark:bg-ink sm:max-w-xs md:max-w-sm lg:max-w-[350px] xl:max-w-[390px]"
          >
            <img
              src="/aman-portrait.png"
              alt="Aman Verma - Developer Portrait"
              width={2000}
              height={2678}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full w-full object-cover grayscale contrast-110 brightness-110 opacity-90 transition-all duration-1000"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement?.classList.add("fallback-bg");
              }}
            />
            {/* Fallback pattern if image is missing */}
            <div className="absolute inset-0 -z-10 bg-ink/5 dark:bg-paper/5 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-ink/20 dark:border-paper/20 fallback-bg-content">
              <span className="text-sm font-mono text-ink/40 dark:text-paper/40 inline-block mb-2">
                Upload your image
              </span>
              <span className="text-xs text-ink/30 dark:text-paper/30 pb-2">
                Name it 'aman-portrait.jpg' and put it in the public folder
              </span>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ink dark:border-paper" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ink dark:border-paper" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ink dark:border-paper" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ink dark:border-paper" />
          </div>
        </div>

        {/* Content Section */}
        <div
          ref={textContainerRef}
          className="flex flex-col justify-center bg-paper p-6 dark:bg-ink md:p-10 lg:col-span-7 lg:p-12 xl:p-14"
        >
          <div className="mb-8 space-y-2">
            <span className="hero-text inline-block text-[10px] font-mono uppercase tracking-normal text-ink/40 dark:text-paper/40">
              Personal Portfolio / 2026
            </span>
            <div className="overflow-hidden pb-2 md:pb-4">
              <h1 className="hero-text text-4xl font-display font-black uppercase leading-none tracking-normal text-ink dark:text-paper sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                Aman Verma
              </h1>
            </div>
            <div className="overflow-hidden pb-2 md:pb-4">
              <h2 className="hero-text text-5xl font-accent leading-none text-transparent opacity-90 [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Developer
              </h2>
            </div>
          </div>

          <div className="hero-text mt-8 border-t border-ink/10 pt-8 dark:border-paper/10">
            <p className="max-w-md text-sm md:text-base font-medium text-ink/70 dark:text-paper/70 leading-relaxed font-mono">
              [SYSTEM_STATUS: ONLINE]
              <br />
              <br />
              Full-stack developer specializing in building performant systems
              and clean user interfaces. Experienced in API design, backend
              architecture, and scalable frontend applications.
              <br /> Optimized systems. Thoughtful interfaces.
            </p>
          </div>

          <div className="hero-text mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-ink/40 dark:text-paper/40">
                Location
              </span>
              <span className="text-xs font-display font-bold uppercase tracking-normal">
                India
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase text-ink/40 dark:text-paper/40">
                Expertise
              </span>
              <span className="text-xs font-display font-bold uppercase tracking-normal">
                Full-Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Label */}
      <div className="absolute bottom-8 right-8 hidden md:block">
        <span className="hero-text origin-right rotate-90 text-[10px] font-mono uppercase tracking-normal text-ink/20 dark:text-paper/20">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
