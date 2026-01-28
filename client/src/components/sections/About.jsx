const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            I'm a passionate full-stack developer with experience in building web applications
            using modern technologies. I love creating elegant solutions to complex problems
            and continuously learning new skills.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With a strong foundation in both frontend and backend development, I bring ideas
            to life through clean, efficient code and user-friendly interfaces.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">3+</div>
              <div className="text-gray-600">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Committed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
