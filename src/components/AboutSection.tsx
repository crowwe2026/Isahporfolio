import { Code2, Palette, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Blending aesthetics with functionality for memorable experiences.',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile development with quick iterations and timely deliveries.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            <span className="inline-block text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">
              About Me
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Turning ideas into{' '}
              <span className="text-gradient">digital reality</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              My name is Isah Aruna, and I am a Web Developer and IT Professional with over 5 years of hands-on experience building fast, responsive, and SEO-friendly websites. I specialize in developing modern user interfaces using React.js and WordPress, focusing on usability, performance, and clean design that delivers real value to users.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Beyond web development, I have strong experience in DevOps practices, IT support, and cloud security. This allows me to manage projects from development to deployment, ensuring systems remain secure, scalable, and efficient. I am skilled in troubleshooting technical issues, supporting teams, and maintaining reliable digital environments.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <span className="font-display text-4xl font-bold text-gradient">5+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="font-display text-4xl font-bold text-gradient">50+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <span className="font-display text-4xl font-bold text-gradient">30+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Outside of work, I enjoy continuous learning, exploring new technologies, and improving my professional skills. I am always open to opportunities where I can contribute my expertise, collaborate with innovative teams, and build impactful digital solutions.
            </p>
          </div>

          {/* Right column - Highlight cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-secondary rounded-xl group-hover:bg-gradient-gold transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
