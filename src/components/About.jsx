import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16 relative">
          About Me
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          <div className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto text-center">
            <p className="mb-6">
              Hello! I'm a passionate developer with experience in building modern web applications using React, Tailwind CSS, and other cutting-edge technologies. I enjoy creating clean, user-friendly interfaces and smooth animations to enhance user experience.
            </p>
            <p className="mb-6">
              When I'm not coding, I love exploring new tech trends, contributing to open source, and improving my skills through continuous learning.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <div className="bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full font-semibold border border-blue-500/30 hover:bg-blue-800/50 hover:border-blue-400/50 hover:scale-105 hover:shadow-2xl shadow-blue-500/50 transition-all duration-300 cursor-pointer">
                Problem Solver
              </div>
              <div className="bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full font-semibold border border-purple-500/30 hover:bg-purple-800/50 hover:border-purple-400/50 hover:scale-105 hover:shadow-2xl shadow-purple-500/50 transition-all duration-300 cursor-pointer">
                Team Player
              </div>
              <div className="bg-green-900/50 text-green-300 px-4 py-2 rounded-full font-semibold border border-green-500/30 hover:bg-green-800/50 hover:border-green-400/50 hover:scale-105 hover:shadow-2xl shadow-green-500/50 transition-all duration-300 cursor-pointer">
                Quick Learner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
