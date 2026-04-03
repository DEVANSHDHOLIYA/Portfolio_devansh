import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">
          &copy; {year} Devansh Dholiya. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#home" className="text-sm text-slate-500 hover:text-orange-500 transition-colors">Home</a>
          <a href="#about" className="text-sm text-slate-500 hover:text-orange-500 transition-colors">About</a>
          <a href="#projects" className="text-sm text-slate-500 hover:text-orange-500 transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-slate-500 hover:text-orange-500 transition-colors">Contact</a>
        </div>
        
        <div className="text-slate-500 text-sm flex items-center gap-1">
          Designed in React
        </div>
      </div>
    </footer>
  );
}
