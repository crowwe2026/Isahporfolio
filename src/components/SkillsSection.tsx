const skills = [
  { name: 'React', level: 95 },
  { name: 'WordPress', level: 95 },
  { name: 'Theme Development', level: 94 },
  { name: 'Plugin Development', level: 93 },
  { name: 'Cloud Security', level: 96 },
  { name: 'Site Recovery', level: 95 },
  { name: 'AI Automation', level: 70 },
  { name: 'SEO analytical', level: 85 },
];

const technologies = [
  'JavaScript', 'React', 'Python', 'Django', 'MongoDB', 'Redis', 'Docker',
  'AWS', 'Vercel', 'Git', 'Figma', 'Tailwind CSS',
  'Wordpress', 'Business Email', 'Cpanel', 'Site Recovery /Backup', 'E-commerce'
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">
            Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills with progress bars */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Core Proficiencies
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-foreground font-medium">{skill.name}</span>
                    <span className="font-body text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-gold rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology tags */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 bg-card border border-border rounded-full text-foreground font-body text-sm hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
