import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'isahdanjuma5@gmail.com', href: 'mailto:isahdanjuma5@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+2348137337937', href: 'tel:+2348137337937' },
  { icon: MapPin, label: 'Location', value: 'Abuja, Nigeria', href: '#' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    const text = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    window.open(`https://wa.me/2348137337937?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-display font-medium text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-gold text-primary-foreground font-display font-semibold rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-5 p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 bg-secondary rounded-xl group-hover:bg-gradient-gold transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-display text-foreground font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="font-body text-muted-foreground mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dantech205"
                  className="px-5 py-2.5 bg-card border border-border rounded-full text-foreground font-body text-sm hover:border-primary hover:text-primary transition-all duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/aruna-isah-b53843278"
                  className="px-5 py-2.5 bg-card border border-border rounded-full text-foreground font-body text-sm hover:border-primary hover:text-primary transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="px-5 py-2.5 bg-card border border-border rounded-full text-foreground font-body text-sm hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
