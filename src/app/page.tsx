"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TardisModal from '@/components/TardisModal';
import ProjectModal from '@/components/ProjectModal';
import { dict } from '@/data/dictionary';
import Image from 'next/image';

const GithubIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>);
const LinkedinIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>);
const InstagramIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>);

function useScrollspy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0px 0px -50% 0px` }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, offset]);

  return activeId;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isFlying, setIsFlying] = useState(false);
  const [lang, setLang] = useState<'en' | 'id'>('id');
  const spotlightRef = React.useRef<HTMLDivElement>(null);
  const activeSection = useScrollspy(['about', 'experience', 'projects']);

  const t = dict[lang];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'id' : 'en');
  };

  return (
    <div className="bg-slate-900 text-slate-400 min-h-screen font-sans selection:bg-teal-300/30 selection:text-teal-300 relative">
      {/* Skip to content link for accessibility */}
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0 z-50 transition-transform"
      >
        Skip to Content
      </a>

      {/* Dynamic Cursor Spotlight - Optimized for 60fps with useRef */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 pt-12 pb-6 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4 relative z-40">

          {/* Left fixed section */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Irwanto</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {t.hero.title}
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400 text-base">
                {t.hero.description}
              </p>

              <nav className="nav hidden lg:block mt-16">
                <ul className="mt-8 w-max list-none p-0">
                  <li>
                    <a className={`group flex items-center py-3 ${activeSection === 'about' ? 'active' : ''}`} href="#about">
                      <span className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === 'about' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ease-in-out group-hover:text-slate-200 group-hover:translate-x-2 group-focus-visible:text-slate-200 ${activeSection === 'about' ? 'text-slate-200 translate-x-2' : 'text-slate-500'}`}>{t.nav.about}</span>
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-3 ${activeSection === 'experience' ? 'active' : ''}`} href="#experience">
                      <span className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === 'experience' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ease-in-out group-hover:text-slate-200 group-hover:translate-x-2 group-focus-visible:text-slate-200 ${activeSection === 'experience' ? 'text-slate-200 translate-x-2' : 'text-slate-500'}`}>{t.nav.experience}</span>
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-3 ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">
                      <span className={`nav-indicator mr-4 h-px transition-all duration-300 ease-in-out group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === 'projects' ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-all duration-300 ease-in-out group-hover:text-slate-200 group-hover:translate-x-2 group-focus-visible:text-slate-200 ${activeSection === 'projects' ? 'text-slate-200 translate-x-2' : 'text-slate-500'}`}>{t.nav.projects}</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <ul className="flex items-center text-slate-400 list-none p-0 m-0" aria-label="Social media">
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-slate-200 transition-colors" href="https://github.com/irwan-dev-sys" target="_blank" rel="noreferrer">
                    <span className="sr-only">GitHub</span>
                    <GithubIcon className="w-6 h-6" />
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-slate-200 transition-colors" href="https://www.linkedin.com/in/irwandev" target="_blank" rel="noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <LinkedinIcon className="w-6 h-6" />
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a className="block hover:text-slate-200 transition-colors" href="mailto:irwanto.career@gmail.com" target="_blank" rel="noreferrer noopener" aria-label="Email">
                    <span className="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </a>
                </li>
              </ul>

              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-slate-500 hover:text-slate-200 transition-colors ml-4 border-l border-slate-600 pl-6"
                aria-label="Toggle language"
              >
                <span className={`transition-colors ${lang === 'en' ? 'text-teal-300' : ''}`}>EN</span>
                <span>/</span>
                <span className={`transition-colors ${lang === 'id' ? 'text-teal-300' : ''}`}>ID</span>
              </button>
            </motion.div>
          </header>

          {/* Right scrollable section */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24 flex flex-col lg:min-h-screen relative">

            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{t.nav.about}</h2>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="mb-6 text-lg font-medium text-slate-200" dangerouslySetInnerHTML={{ __html: t.about.p1 }}></p>
                  <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.about.p2 }}></p>
                  <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.about.p3 }}></p>
                  <p className="mb-4" dangerouslySetInnerHTML={{ __html: t.about.p4 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: t.about.p5 }}></p>
                </motion.div>
              </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
              <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{t.nav.experience}</h2>
              </div>
              <div>
                <ol className="group/list">
                  {t.experience.jobs.map((job, index) => (
                    <li className="mb-12" key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                      >
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={job.date}>
                          {job.date}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors" href={job.url || "#"} target="_blank" rel="noopener noreferrer">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{job.title} · {job.company} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400" dangerouslySetInnerHTML={{ __html: job.description }}></p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {job.tech.map((techItem, i) => (
                              <li className="mr-1.5 mt-2" key={i}><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{techItem}</div></li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </li>
                  ))}
                </ol>
                <div className="mt-12">
                  <a className="inline-flex items-center leading-tight font-semibold text-slate-200 group" aria-label="View Full Résumé" href="/resume" target="_blank" rel="noreferrer noopener">
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Résumé</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 motion-reduce:transition-none" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{t.nav.projects}</h2>
              </div>
              <div>
                <ul className="group/list">
                  {t.projects.items.map((project, index) => (
                    <li className="mb-12" key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <button type="button" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors text-left">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>{project.title} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span>
                              </button>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {project.tech.map((techItem, i) => (
                              <li className="mr-1.5 mt-2" key={i}><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{techItem}</div></li>
                            ))}
                          </ul>
                        </div>
                        <div className="sm:order-1 sm:col-span-2 sm:translate-y-1 z-10">
                          <div className="w-full bg-slate-800/50 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 overflow-hidden aspect-video relative flex items-center justify-center">
                            {project.image ? (
                              <Image src={project.image} alt={project.title} fill className="object-cover" />
                            ) : (
                              <div className="text-4xl">{project.emoji}</div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </li>
                  ))}
                </ul>
                <div className="mt-12">
                  <a className="inline-flex items-center leading-tight font-semibold text-slate-200 group" aria-label="View Full Project Archive" href="/archive">
                    <span>
                      <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">{t.projects.archive} </span>
                      <span className="whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            <footer className="w-full text-sm text-slate-500 mt-auto sm:flex sm:justify-between sm:items-end">
              <div className="max-w-md">
                <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.footerTagline }}></p>
                {/* Design inspired by Brittany Chiang — brittanychiang.com */}
                <p>
                  Design &amp; Layout by <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-medium hover:text-teal-300 transition-colors">Brittany Chiang</a> &middot; Built &amp; Customized by Irwanto &middot; &copy; {new Date().getFullYear()}
                </p>
              </div>
              <div className="mt-6 sm:mt-0 flex justify-end sm:block lg:translate-x-12 lg:translate-y-16">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="hover:text-teal-300 inline-flex items-center px-2 pt-2 pb-0 font-medium text-slate-400 hover:-translate-y-2 transition-transform duration-300 focus-visible:text-teal-300"
                  aria-label="Click to time travel Spinning Tardis from Brittany Chiang"
                >
                  <Image
                    src="/tardis.gif"
                    alt="Tardis"
                    width={110}
                    height={110}
                    unoptimized
                    className="w-[110px] h-auto object-contain"
                  />
                </button>
              </div>
            </footer>
          </main>
        </div>
      </div>

      {/* Easter Egg Modal */}
      {isModalOpen && (
        <TardisModal onClose={() => setIsModalOpen(false)} />
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            labels={t.projects.modalLabels}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}