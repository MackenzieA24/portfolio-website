const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-600">Mackenzie Aylor</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Full-Stack Engineer | AWS Certified | Problem Solver
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Building applications with the same rigor required to lead operations in high-stakes environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
