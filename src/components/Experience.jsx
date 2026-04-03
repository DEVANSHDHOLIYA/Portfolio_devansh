import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: "Present",
    title: "Full Stack MERN Developer",
    description: "Building production-ready scalable applications, handling both complex front-end UI and robust back-end APIs. Focusing on system architecture and performance optimization."
  },
  {
    year: "2023",
    title: "Mastering Backend (Node & Express)",
    description: "Transitioned to full-stack by learning server-side programming. Built RESTful APIs, implemented JWT authentication, and mastered MongoDB database design."
  },
  {
    year: "2022",
    title: "Frontend Journey (React & Tailwind)",
    description: "Fell in love with component-based architecture. Built highly interactive UIs, managed complex state with React Hooks, and created responsive designs using Tailwind CSS."
  },
  {
    year: "2021",
    title: "The Beginning",
    description: "Started the programming journey with HTML, CSS, and basic JavaScript. Discovered a passion for creating things from scratch and solving logic problems."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-500">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-slate-700/50 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Vertical subtle line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-700/50 -translate-x-1/2" />

          {timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={['relative mb-12 flex flex-col md:flex-row', isEven ? 'md:flex-row-reverse' : ''].join(' ')}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-41px] md:left-1/2 w-5 h-5 rounded-full bg-slate-900 border-4 border-orange-500 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                <div className="md:w-1/2 flex items-center justify-start md:justify-end">
                  <div
                    className={['hidden md:block text-orange-500 font-bold text-xl px-8 w-full', isEven ? 'text-left' : 'text-right'].join(' ')}
                  >
                    {item.year}
                  </div>
                  <div className="md:hidden text-orange-500 font-bold text-xl mb-2">
                    {item.year}
                  </div>
                </div>

                <div className={['md:w-1/2', isEven ? 'md:pr-12' : 'md:pl-12'].join(' ')}>
                  <div className="glass-panel p-6 md:p-8 relative group hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.description}
                    </p>

                    {/* Decorative corner indicator */}
                    <div
                      className={[
                        'absolute top-1/2 w-4 h-4 bg-slate-900/50 border-t border-r border-slate-800/50 rotate-45 -translate-y-1/2 hidden md:block',
                        isEven ? '-right-2' : '-left-2 border-l border-b border-t-0 border-r-0'
                      ].join(' ')}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
