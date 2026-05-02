/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Gallery } from './components/sections/Gallery';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { isDimming } = useTheme();

  return (
    <div className="min-h-[100dvh] bg-paper text-ink transition-colors duration-700 ease-in-out dark:bg-ink dark:text-paper selection:bg-ink selection:text-paper dark:selection:bg-paper dark:selection:text-ink">
      <AnimatePresence>
        {isDimming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-ink dark:bg-paper pointer-events-none"
          />
        )}
      </AnimatePresence>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
