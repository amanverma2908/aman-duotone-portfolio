import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/amanverma2908",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/midnightcoder",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/midnightcoder",
  },
  {
    name: "Medium",
    href: "https://medium.com/@midnightcoder",
  },
];

export function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-paper px-6 py-12 dark:border-paper/10 dark:bg-ink md:px-12 md:py-16 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Info & Links */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Status & Time */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-ink/50 dark:text-paper/50 mb-2">
                Local Time
              </h4>
              <p className="text-lg font-medium">{time || "—"}</p>
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-ink/50 dark:text-paper/50 mb-2">
                Availability
              </h4>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-lg font-medium">Open for opportunities</p>
              </div>
            </div>
          </div>

          {/* Right: Socials & Navigation */}
          <div className="flex flex-col md:items-end gap-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-ink/50 dark:text-paper/50 mb-2 md:text-right">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-fit items-center gap-1 text-lg font-medium transition-colors hover:text-ink/60 dark:hover:text-paper/60 md:ml-auto"
                >
                  {social.name}
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-12 flex w-full flex-col items-center justify-center md:mt-16">
          <div className="flex w-full flex-col items-center justify-between border-t border-ink/10 pt-8 text-xs font-mono uppercase tracking-widest text-ink/50 dark:border-paper/10 dark:text-paper/50 md:flex-row">
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
            <p className="mt-4 md:mt-0">
              Designed & Built with passion by AMAN VERMA 💜
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
