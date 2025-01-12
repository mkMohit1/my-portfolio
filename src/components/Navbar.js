import React, { useState } from 'react';

const Navbar = () => {
  const [currentActive, setCurrentActive] = useState('');
  // console.log(window.location.hash);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:justify-between lg:max-h-screen lg:flex-col lg:py-24 lg:w-[48%]">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text5xl">
        <a href='/'>Mohit</a>        
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front End Developer</h2>
      <p className="mt-4 max-w-xs leading-normal">
      I build accessible, pixel-perfect digital experiences for the web. Passionate about clean and user-friendly interfaces.
      </p>
      <nav className="nav hidden lg:block"
        aria-label='In-page jump links'
      >
        <ul className="mt-16 w-max">
          <li><a href="#about" className="group flex items-center py-3 active">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition:none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group focus-visible:text-slate-200">About</span>
            </a></li>
          <li><a href="#experience" className="group flex items-center py-3">
          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition:none"></span>
          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group focus-visible:text-slate-200">Experience</span>
            </a></li>
          <li><a href="#projects" className="group flex items-center py-3">
          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition:none"></span>
          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group focus-visible:text-slate-200">Projects</span>
            </a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
