import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'WeAreCluebox.com',
    description: 'WeAreCluebox.com is a modern digital agency website developed to showcase Cluebox’s services, creative solutions, portfolio work, and client offerings in a clean and engaging online experience. The platform provides a professional interface that allows visitors to quickly understand the agency’s capabilities, explore services, and connect for project inquiries with ease. The project emphasized performance optimization, responsive design, and structured SEO to ensure fast load times, strong search engine visibility, and smooth navigation across all screen sizes. A clear content hierarchy, intuitive navigation menus, and thoughtfully designed sections were implemented to improve readability and user engagement. Security best practices, regular backups, and continuous updates were put in place to maintain website stability, protect client data, and support ongoing growth. Combined with performance enhancements and UI/UX improvements, the website delivers a polished and trustworthy digital presence for the brand. Worked as a Web Developer responsible for design customization, SEO optimization, responsive layout implementation, plugin configuration, website security setup, and ongoing site maintenance.',
    tags: ['WordPress', 'Custom PHP', 'Responsive Design', 'SEO Optimization', 'UI/UX Optimization', 'Website Security', 'Performance Optimization', 'Backup & Recovery', 'Plugin Configuration', 'HTML', 'CSS', 'JavaScript'],
    image: '/cluebox.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Tilecraft — Online Tile & Home Improvement E-Commerce Platform',
    description: 'Tilecraft.ng is a modern e-commerce website developed to showcase premium tiles, home improvement products, and building materials in a user-friendly online marketplace. The platform delivers an intuitive browsing experience that allows customers to explore product categories, view detailed product specifications, and easily make purchase decisions. The project focused on performance optimization, SEO structuring, and responsive design to ensure fast load times, strong search visibility, and seamless navigation across all devices. A clear layout and organized product taxonomy were implemented to improve usability and product discoverability, while secure checkout processes and reliable payment options enhanced customer trust and conversion rates.',
    tags: ['WordPress', 'WooCommerce', 'Custom PHP', 'SEO Optimization', 'Responsive Design', 'UI/UX Optimization', 'E-Commerce Setup', 'Website Security', 'Performance Optimization', 'Backup & Recovery', 'Plugin Configuration', 'HTML', 'CSS', 'JavaScript'],
    image: '/tile.png',
    liveUrl: 'https://tilecraft.ng/',
    githubUrl: '#',
  },
  {
    title: 'Dstrct Solutions — Corporate Business Website Platform',
    description: 'A modern corporate website developed to present company services, strengthen brand credibility, and improve client engagement. The platform provides a clean, professional, and responsive interface that allows visitors to easily explore services, understand company offerings, and connect with the team seamlessly. The project emphasized performance optimization, SEO structuring, and user experience improvements to ensure strong search visibility and smooth navigation across all devices. Special attention was given to layout clarity, readability, and mobile responsiveness to enhance accessibility for a wider audience.',
    tags: ['WordPress', 'Custom PHP', 'SEO Optimization', 'Responsive Design', 'UI/UX Optimization', 'Website Security', 'Performance Optimization', 'Backup & Recovery', 'Plugin Configuration', 'HTML', 'CSS', 'JavaScript'],
    image: '/dstrct.png',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing creative solutions and technical expertise.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:-translate-y-2"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60">
                  {project.title === 'Dstrct Solutions — Corporate Business Website Platform' ? (
                    <a
                      href="https://dstrctsolutions.com/"
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                      aria-label="View live project"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-5 h-5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                    </a>
                  ) : (
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-secondary text-foreground rounded-full hover:scale-110 transition-transform"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-body rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-medium rounded-full hover:bg-secondary transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
