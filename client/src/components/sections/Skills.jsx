const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'VS Code', 'npm/yarn', 'Vite', 'Agile/Scrum']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
