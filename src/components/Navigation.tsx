import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-2xl font-bold text-gradient"
          >
            JD
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative font-body text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-gold rounded-full" />
                )}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/2348137337937?text=Welcome%20to%20DanTechService%20%E2%80%94%20where%20smart%20solutions%20meet%20real%20results.%20How%20can%20we%20help%20your%20business%20grow%20today%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-5 py-2.5 bg-gradient-gold text-primary-foreground font-display font-medium text-sm rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
