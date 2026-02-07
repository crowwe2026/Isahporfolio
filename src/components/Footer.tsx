const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="font-display text-xl font-bold text-gradient">
            JD
          </a>
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Isah Aruna. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Built with <span className="text-primary">♥</span> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
