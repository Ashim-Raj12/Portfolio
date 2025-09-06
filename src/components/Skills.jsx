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
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 relative">
          Professional Skills
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
        </h2>
        {skillGroups.map((group, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">{group.groupName}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {group.skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 border border-gray-700 flex flex-col items-center text-center">
                  <span className="font-semibold text-lg md:text-xl text-white mb-3">{skill.name}</span>
                  <div className="w-full bg-gray-700 rounded-full h-3 md:h-4 overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${skill.color} h-3 md:h-4 rounded-full transition-all duration-1000 ease-out shadow-md`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 mt-2">{skill.level}% proficiency</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
