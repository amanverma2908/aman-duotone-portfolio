import React, { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: "Codebase IDE",
    category: "Full Stack / Online IDE",
    image: "/images/project1-main.png",
    description:
      "An online coding platform built around the Piston API, with a Monaco-powered editor, language selection, code execution flow, and a full-stack JavaScript architecture for running code from the browser.",
    tech: ["React", "Monaco Editor", "Express", "MongoDB", "Piston API"],
    live: "https://codebase-ide.vercel.app/",
    repo: "https://github.com/amanverma2908/codebase-ide.git",
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    category: "Frontend / Game",
    image: "/images/project2-main.png",
    description:
      "A classic two-player Tic Tac Toe game built with HTML, CSS, and JavaScript. The project recreates the 3x3 grid flow with turn-based X/O moves, win detection across rows, columns, and diagonals, and a clean browser-first interface.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    live: "https://amanverma2908.github.io/tic-tac-toe/",
    repo: "https://github.com/amanverma2908/tic-tac-toe.git",
  },
  // {
  //   id: 3,
  //   title: "DuoTone Portfolio",
  //   category: "Frontend",
  //   image: "/images/project-1.jpg",
  //   description:
  //     "An exploration of negative space and mathematical symmetry. This project investigates how light interacts with complex geometric volumes in a vacuum-like environment.",
  //   tech: ["Three.js", "GLSL", "React"],
  //   live: "https://example.com",
  //   repo: "https://github.com",
  // },
  // {
  //   id: 4,
  //   title: "Brutal Monolith",
  //   category: "Architecture / Brutalism",
  //   image: "/images/project-2.jpg",
  //   description:
  //     "A photographic study of raw concrete structures. Capturing the imposing presence and honest materiality of mid-century brutalist architecture through high-contrast monochrome lenses.",
  //   tech: ["Next.js", "Tailwind", "GSAP"],
  //   live: "https://example.com",
  //   repo: "https://github.com",
  // },
  // {
  //   id: 5,
  //   title: "Organic Texture",
  //   category: "Macro / Nature",
  //   image: "/images/project-3.jpg",
  //   description:
  //     "Revealing the hidden patterns of the natural world. This macro series focuses on the intricate vascular systems of flora, transformed into abstract landscapes of light and shadow.",
  //   tech: ["Canvas API", "D3.js", "TypeScript"],
  //   live: "https://example.com",
  //   repo: "https://github.com",
  // },
];

export function Gallery() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".gallery-item");

      items.forEach((item: any) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      const parallaxImages = gsap.utils.toArray(".parallax-image");
      parallaxImages.forEach((img: any) => {
        gsap.fromTo(
          img,
          { yPercent: -15 },
          {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
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
      id="projects"
      className="py-16 md:py-24 lg:py-40 px-6 md:px-12 lg:px-16 min-h-screen bg-paper dark:bg-ink border-t border-ink/10 dark:border-paper/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8">
        <div className="xl:col-span-4 relative mb-12 xl:mb-0">
          <span className="absolute -top-8 md:-top-10 -left-2 md:-left-4 text-[80px] md:text-[100px] lg:text-[120px] font-display font-black text-transparent [-webkit-text-stroke:1px_var(--color-ink)] dark:[-webkit-text-stroke:1px_var(--color-paper)] opacity-10 leading-none select-none z-0">
            04
          </span>
          <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-accent text-ink dark:text-paper pt-6 md:pt-8">
            Selected Works
          </h2>
        </div>
        <div className="xl:col-span-8">
          <div className="grid gap-12 md:grid-cols-2">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="gallery-item group relative aspect-video overflow-hidden bg-ink/5 dark:bg-paper/5 cursor-pointer transition-all duration-700 ease-out"
              >
                {/* Free Thin Border Lines (Hover Only) */}
                <div className="absolute inset-4 z-20 pointer-events-none opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100">
                  <div className="absolute top-0 left-0 w-full h-px bg-paper/20 dark:bg-ink/20" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-paper/20 dark:bg-ink/20" />
                  <div className="absolute top-0 left-0 w-px h-full bg-paper/20 dark:bg-ink/20" />
                  <div className="absolute top-0 right-0 w-px h-full bg-paper/20 dark:bg-ink/20" />

                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-paper dark:border-ink" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-paper dark:border-ink" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-paper dark:border-ink" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-paper dark:border-ink" />
                </div>

                <div className="h-full w-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="parallax-image absolute inset-0 w-full h-[130%] top-[-15%] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.15]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Refined Color Overlay */}
                  <div className="absolute inset-0 bg-ink/40 dark:bg-paper/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply dark:mix-blend-screen" />
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 mix-blend-overlay transition-all duration-700" />

                  {/* Vignette */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 z-30">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-paper dark:text-ink mb-2">
                    0{index + 1} // {project.category}
                  </p>
                  <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-paper dark:text-ink leading-none">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-ink/90 dark:bg-paper/90 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-4xl overflow-hidden bg-paper dark:bg-ink border border-ink/10 dark:border-paper/10 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 text-ink/50 dark:text-paper/50 hover:text-ink dark:hover:text-paper transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="aspect-3/4 md:aspect-auto h-64 md:h-150 overflow-hidden"
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="h-full w-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="p-8 md:p-12 flex flex-col justify-center"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink/40 dark:text-paper/40 mb-2">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-ink dark:text-paper mb-6">
                      {selectedProject.title}
                    </h2>
                    <p className="text-sm md:text-base text-ink/70 dark:text-paper/70 leading-relaxed mb-8 font-mono">
                      {selectedProject.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-ink/40 dark:text-paper/40 mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="cursor-tag px-3 py-1 text-[10px] font-mono border border-ink/10 dark:border-paper/10 text-ink/60 dark:text-paper/60 transition-colors duration-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-ink dark:bg-paper text-paper dark:text-ink text-xs font-display font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-ink/10 dark:border-paper/10 text-ink dark:text-paper text-xs font-display font-bold uppercase tracking-widest hover:bg-ink/5 dark:hover:bg-paper/5 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
