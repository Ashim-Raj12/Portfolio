import React, { useState } from "react";
import currencyConverterImg from "../assets/currency-converter.png";
import weatherGoImg from "../assets/weather-go.png";
import ticTacToeImg from "../assets/tic-tac-toe.png";
import ecommerceImg from "../assets/ecomerce.jpg";
import calculatorImg from "../assets/calculator.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Currency Converter",
      description:
        "A simple and user-friendly currency converter application built with React and Vite. This application allows users to convert amounts between different currencies using real-time exchange rates.",
      image: currencyConverterImg,
      technologies: [
        "React",
        "Tailwind CSS",
        "React Icons",
        "JavaScript",
        "Frankfurther API",
      ],
      github: "https://github.com/Ashim-Raj12/Currency-Converter",
      demo: "https://convert-currncy.netlify.app/",
    },
    {
      id: 2,
      title: "Weather Go",
      description:
        "A beautiful, modern weather application built with React and Vite that provides real-time weather information for any location worldwide. Features automatic location detection, city search with autocomplete, and a stunning glassmorphism UI design.",
      image: weatherGoImg,
      technologies: [
        "React",
        "Tailwind CSS",
        "Open-Meteo API",
        "JavaScript",
        "Vite",
      ],
      github: "https://github.com/Ashim-Raj12/Weather",
      demo: "https://weather-one-phi-44.vercel.app/",
    },
    {
      id: 3,
      title: "Tic Tac Toe",
      description:
        "A simple React.js Tic Tac Toe game for two players on the same device. It tracks game state, detects winners (or draws), and offers a restart button. Fully responsive for desktop and mobile.",
      image: ticTacToeImg,
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Ashim-Raj12/tic-tac-toe",
      demo: "https://tic-tac-toe-arn.netlify.app/",
    },
    {
      id: 4,
      title: "Minimal Ecommerce App",
      description:
        "A sleek and modern e-commerce mobile application built with Flutter. This app showcases products, allows users to add items to their cart, and features a responsive, clean UI with state management using the Provider package.",
      image: ecommerceImg,
      technologies: ["Flutter", "Dart", "Provider", "Google Fonts"],
      github: "https://github.com/Ashim-Raj12/minimal-ecommerce-app",
      demo: "#",
    },
    {
      id: 5,
      title: "Calculator",
      description:
        "A simple calculator created using HTML, CSS, and JavaScript that supports basic arithmetic operations including a theme toggle button to switch between light and dark modes, ensuring a clean and responsive user experience across devices.",
      image: calculatorImg,
      technologies: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/Ashim-Raj12/calculator",
      demo: "https://calculator-byashim.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-white mb-16 relative">
          Projects
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-white/10 hover:bg-white/10 hover:border-white/20 group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-56 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-gray-800 rounded-3xl max-w-4xl w-full max-h-90vh overflow-y-auto shadow-2xl border border-gray-700">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl font-bold transition duration-300"
                  >
                    ✕
                  </button>
                </div>
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
                  >
                    GitHub
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
