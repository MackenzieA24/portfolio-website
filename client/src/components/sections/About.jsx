const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            I'm a Full-Stack Engineer with a B.Sc. in Software Engineering from Western Governors University.
            I build applications with end-to-end ownership, focusing on architecting robust systems and
            delivering flawless user experiences.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            I'm passionate about clean code, secure applications, and continuous learning. Currently
            exploring the intersection of traditional software engineering and AI—working with LLMs,
            AI agents, and tools like Claude and LibreChat to build intelligent applications.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            My focus areas include full-stack development with Java/Spring Boot and React, cloud
            technologies on AWS, and emerging AI/ML tooling including vector databases and prompt engineering.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">B.Sc.</div>
              <div className="text-gray-600">Software Eng.</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">AWS</div>
              <div className="text-gray-600">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">PSM I</div>
              <div className="text-gray-600">Scrum Master</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">ITIL</div>
              <div className="text-gray-600">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
