const Skills = () => {
  const skills = [
    {
      category: 'Backend',
      items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs', 'WebSocket']
    },
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'Android']
    },
    {
      category: 'AI & LLMs',
      items: ['Claude', 'LibreChat', 'AI Agents', 'Vector Databases', 'Prompt Engineering']
    },
    {
      category: 'Data & Cloud',
      items: ['MongoDB', 'PostgreSQL', 'H2', 'JPA/Hibernate', 'AWS']
    },
    {
      category: 'Tools & Practices',
      items: ['Git', 'Agile/Scrum', 'ITIL', 'Vite', 'Jest', 'Vitest']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {skillSet.category}
              </h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
