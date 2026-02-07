import { ArrowDown, MapPin, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="animate-fade-up mb-8">
            <img
              src="/isah.jpeg"
              alt="Profile Picture"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary/20 shadow-lg"
            />
          </div>

          {/* Tag */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-4 py-2 bg-secondary border border-border rounded-full text-sm text-muted-foreground font-body mb-8">
              Available for Work
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-3xl font-bold tracking-tight mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="block text-yellow-500">Isah Aruna</span>
            <span className="block text-foreground">WordPress Developer, Cloud Security Analyst, DevOps</span>
            <span className="block text-foreground">Frontend Developer, SEO Analyst</span>
            <span className="block text-foreground">IT Support Expertise.</span>
          </h1>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-gold text-primary-foreground font-display font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="/cv/Isah Aruna CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-muted/80 h-11 px-8 hidden w-full sm:flex sm:w-auto"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-download ml-2 size-4"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
