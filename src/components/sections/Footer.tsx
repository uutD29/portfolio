import { ArrowUpRight, Github, Linkedin, Mail, MessageSquareMore } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      id: 1,
      name: "GitHub",
      description: "Open GitHub",
      href: "https://github.com/uutD29/",
      icon: <Github className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "LinkedIn",
      description: "Open LinkedIn",
      href: "https://www.linkedin.com/in/uhud-tarbani-459541379/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Whatsapp",
      description: "Whatsapp Chat",
      href: "https://wa.me/6285155075772",
      icon: <MessageSquareMore className="w-6 h-6" />,
    },
    {
      id: 4,
      name: "Email",
      description: "Send email",
      href: "mailto:uhud.trb@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <footer className="w-full bg-background pt-24 pb-10 px-6 md:px-12 border-t border-border/40">
      <div className="max-w-7xl mx-auto">
        

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">


          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Have a project in mind?
            </p>

            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter hover:italic transition-all cursor-pointer">
              Let's Talk <span className="inline-block animate-bounce">↓</span>
            </h2>

            <div className="flex flex-row items-center justify-center w-full mt-6">
              <AnimatedTooltip items={socialLinks} />
            </div>
          </div>


          <div className="flex flex-col items-start gap-8">


            <nav className="flex flex-col gap-4 text-2xl font-light tracking-tight">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    {link.name}
                  </span>

                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </nav>


            <a
              href="mailto:uhud.trb@gmail.com"
              className="group flex items-start gap-2 text-xl font-light border-b border-foreground pb-1 hover:text-muted-foreground transition-colors"
            >
              uhud.trb@gmail.com
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <p>© {currentYear} Uhud Tarbani — All Rights Reserved</p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-foreground transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;