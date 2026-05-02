import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorLabelRef = useRef<HTMLDivElement>(null);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);

  useEffect(() => {
    document.body.classList.add("hide-cursor");
    gsap.set(cursorRef.current, { opacity: 1 });

    let currentHover: string | null = null;

    const onMouseDown = () => {
      gsap.to(cursorRef.current, { scale: 0.8, duration: 0.15 });
    };

    const onMouseUp = () => {
      gsap.to(cursorRef.current, { scale: 1, duration: 0.15 });
    };

    const onMouseEnterInteractive = () => {
      gsap.to(cursorRef.current, {
        scale: 3.5,
        backgroundColor: "white",
        borderWidth: "0px",
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "white",
        borderWidth: "0px",
        duration: 0.3,
      });
    };

    const onMouseEnterGallery = () => {
      setIsHoveringGallery(true);
      gsap.to(cursorRef.current, {
        scale: 6,
        backgroundColor: "white",
        borderWidth: "0px",
        duration: 0.4,
        ease: "expo.out",
      });
    };

    const onMouseLeaveGallery = () => {
      setIsHoveringGallery(false);
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "white",
        borderWidth: "0px",
        duration: 0.4,
      });
    };

    const onMouseEnterHero = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(".hero-backdrop-shadow", {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(".hero-image-container", {
        y: -10,
        scale: 1.1,
        duration: 0.8,
        ease: "power4.out",
      });
    };

    const onMouseLeaveHero = () => {
      gsap.to(cursorRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "expo.out",
      });
      gsap.to(".hero-backdrop-shadow", {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(".hero-image-container", {
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power4.out",
      });
    };

    const onMouseEnterTag = () => {
      gsap.to(cursorRef.current, {
        scale: 3.5,
        backgroundColor: "transparent",
        borderWidth: "1px",
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    };

    const onMouseLeaveTag = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "white",
        borderWidth: "0px",
        duration: 0.3,
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });

      const target = e.target as HTMLElement;
      let newHover: string | null = null;

      if (target.closest(".hero-image-container")) {
        newHover = "hero";
        const heroImage = document.querySelector(".hero-image-container");
        const backdropShadow = document.querySelector(".hero-backdrop-shadow");

        if (heroImage && backdropShadow) {
          const rect = heroImage.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;

          gsap.to([heroImage, backdropShadow], {
            "--x": `${x}%`,
            "--y": `${y}%`,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      } else if (target.closest(".gallery-item")) {
        newHover = "gallery";
      } else if (target.closest(".cursor-tag")) {
        newHover = "tag";
      } else if (target.closest("a, button")) {
        newHover = "interactive";
      }

      if (currentHover !== newHover) {
        // Leave current
        if (currentHover === "gallery") onMouseLeaveGallery();
        else if (currentHover === "hero") onMouseLeaveHero();
        else if (currentHover === "tag") onMouseLeaveTag();
        else if (currentHover === "interactive") onMouseLeaveInteractive();

        // Enter new
        if (newHover === "gallery") onMouseEnterGallery();
        else if (newHover === "hero") onMouseEnterHero();
        else if (newHover === "tag") onMouseEnterTag();
        else if (newHover === "interactive") onMouseEnterInteractive();

        currentHover = newHover;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.classList.remove("hide-cursor");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-9999 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference hidden md:flex items-center justify-center overflow-hidden"
      style={{ borderWidth: "0px", borderColor: "white", borderStyle: "solid" }}
    >
      <div
        ref={cursorLabelRef}
        className={`absolute text-[2px] font-display font-black uppercase tracking-tighter text-black transition-opacity duration-300 ${isHoveringGallery ? "opacity-100" : "opacity-0"}`}
      >
        View
      </div>
    </div>
  );
}
