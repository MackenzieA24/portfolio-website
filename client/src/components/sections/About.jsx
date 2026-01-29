import { motion } from 'framer-motion';

const About = () => {
  const certifications = [
    { title: 'B.Sc.', subtitle: 'Software Eng.' },
    { title: 'AWS', subtitle: 'Certified' },
    { title: 'PSM I', subtitle: 'Scrum Master' },
    { title: 'ITIL', subtitle: 'Certified' },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-lg text-slate-400 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm a Full-Stack Engineer with a B.Sc. in Software Engineering from Western Governors University.
            I build applications with end-to-end ownership, focusing on architecting robust systems and
            delivering flawless user experiences.
          </motion.p>

          <motion.p
            className="text-lg text-slate-400 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm passionate about clean code, secure applications, and continuous learning. Currently
            exploring the intersection of traditional software engineering and AI—working with LLMs,
            AI agents, and tools like <span className="text-cyan-400">Claude</span> and <span className="text-purple-400">LibreChat</span> to build intelligent applications.
          </motion.p>

          <motion.p
            className="text-lg text-slate-400 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            My focus areas include full-stack development with Java/Spring Boot and React, cloud
            technologies on AWS, and emerging AI/ML tooling including vector databases and prompt engineering.
          </motion.p>

          {/* Certifications */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass-card rounded-xl p-6 text-center hover:neon-border transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-3xl font-bold text-cyan-400 mb-1">{cert.title}</div>
                <div className="text-slate-500 text-sm">{cert.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
