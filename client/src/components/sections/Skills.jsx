import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Clean outline icons matching the theme
const icons = {
  backend: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
  frontend: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const featuredSkills = [
    {
      id: 'backend',
      name: 'Backend',
      icon: icons.backend,
      description: 'Java & Node.js',
      color: 'from-cyan-500 to-cyan-400',
      tagClasses: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
      relatedSkills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs', 'WebSocket']
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: icons.frontend,
      description: 'React & Web',
      color: 'from-purple-500 to-purple-400',
      tagClasses: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
      relatedSkills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Bootstrap', 'Android']
    },
    {
      id: 'cloud',
      name: 'Cloud',
      icon: icons.cloud,
      description: 'AWS & Data',
      color: 'from-cyan-500 to-purple-500',
      tagClasses: 'bg-slate-500/10 text-slate-300 border border-slate-500/20',
      relatedSkills: ['AWS', 'MongoDB', 'PostgreSQL', 'Docker', 'JPA/Hibernate', 'H2']
    },
    {
      id: 'ai',
      name: 'AI & LLMs',
      icon: icons.ai,
      description: 'Intelligent Apps',
      color: 'from-purple-500 to-pink-500',
      tagClasses: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
      relatedSkills: ['Claude', 'LibreChat', 'AI Agents', 'Vector DBs', 'Prompt Engineering', 'RAG']
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#12121a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-4 rounded-full" />
          <p className="text-slate-500 text-center mb-16 text-sm">Hover to explore related technologies</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative"
            >
              <motion.div
                layout
                className={`glass-card rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                  hoveredSkill === skill.id ? 'neon-border' : ''
                }`}
                animate={{
                  scale: hoveredSkill === skill.id ? 1.02 : 1,
                }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-4`}
                  animate={{
                    scale: hoveredSkill === skill.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.icon}
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-100 mb-1">{skill.name}</h3>
                <p className="text-slate-500 text-xs mb-3">{skill.description}</p>

                {/* Related Skills - Animated */}
                <AnimatePresence>
                  {hoveredSkill === skill.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 border-t border-slate-700/50">
                        <div className="flex flex-wrap gap-1.5">
                          {skill.relatedSkills.map((related, i) => (
                            <motion.span
                              key={related}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className={`px-2 py-1 rounded text-xs ${skill.tagClasses}`}
                            >
                              {related}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
