import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      groupName: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'Flutter', level: 75, color: 'from-cyan-500 to-cyan-700' },
        { name: 'HTML', level: 95, color: 'from-orange-500 to-orange-700' },
        { name: 'CSS', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', level: 85, color: 'from-teal-500 to-teal-700' },
        { name: 'EJS', level: 80, color: 'from-indigo-500 to-indigo-700' }
      ]
    },
    {
      groupName: 'Backend',
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'Express', level: 75, color: 'from-gray-500 to-gray-700' }
      ]
    },
    {
      groupName: 'Databases',
      skills: [
        { name: 'MongoDB', level: 70, color: 'from-green-600 to-green-800' },
        { name: 'SQL', level: 75, color: 'from-blue-600 to-blue-800' }
      ]
    },
    {
      groupName: 'Programming Languages',
      skills: [
        { name: 'Java', level: 80, color: 'from-red-500 to-red-700' },
        { name: 'Dart', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 75, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      groupName: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, color: 'from-orange-500 to-orange-700' },
        { name: 'Postman API', level: 80, color: 'from-pink-500 to-pink-700' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="space-y-12">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center mb-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                <h3 className="px-6 text-2xl font-semibold text-white bg-slate-950">
                  {group.groupName}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {group.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105 cursor-pointer"
                  >
                    {/* Skill name and percentage */}
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                      <span className="text-sm font-bold text-gray-300 bg-white/10 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div 
                        className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${skill.color} rounded-full blur-sm opacity-60 transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    {/* Proficiency level text */}
                    <div className="mt-3 flex justify-between text-xs text-gray-400">
                      <span>Proficiency</span>
                      <span className="font-medium">
                        {skill.level >= 90 ? 'Expert' : 
                         skill.level >= 80 ? 'Advanced' : 
                         skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;