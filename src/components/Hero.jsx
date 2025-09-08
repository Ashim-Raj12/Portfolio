import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 leading-tight">
            Hi, I'm <span className="text-blue-300">Ashim Raj</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            I craft digital products that feel effortless and intuitive, designed to engage and inspire.Powered by modern technologies and fresh design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-blue-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="cursor-pointer border-3 border-blue-400 text-blue-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-blue-500/50"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-green-500/50"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="mt-20 animate-bounce">
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer w-12 h-12 mx-auto bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-gray-600"
            aria-label="Scroll to About section"
          >
            <svg className="w-6 h-6 text-blue-400 hover:text-blue-300 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};

export default Hero;
