const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Stock Dashboard',
      description: 'A full-stack, real-time stock price dashboard with Spring WebSocket for live data updates, Alpha Vantage API integration with rate-limiting, and H2 database persistence.',
      technologies: ['Java', 'Spring Boot', 'WebSocket', 'JPA/Hibernate', 'Bootstrap'],
      github: 'https://github.com/MackenzieA24/Stock-Dashboard',
      demo: null
    },
    {
      id: 2,
      title: 'Freezer - Weather Alert App',
      description: 'A proactive Android weather monitoring app with background processing, smart notifications via WorkManager, and automatic location detection for freeze and precipitation alerts.',
      technologies: ['Java', 'Android', 'Retrofit', 'WorkManager', 'OpenWeather API'],
      github: 'https://github.com/MackenzieA24/Freezer',
      demo: null
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This portfolio site built with React and Node.js, featuring security hardening (Helmet, CORS, rate limiting), input validation, error boundaries, and comprehensive testing.',
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Jest', 'Vitest'],
      github: 'https://github.com/MackenzieA24/portfolio-website',
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-300"
                  >
                    GitHub →
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition duration-300"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
