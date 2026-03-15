import { Badge } from "../ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

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
    name: "Email",
    description: "Send email",
    href: "mailto:uhud.trb@gmail.com",
    icon: <Mail className="w-6 h-6" />,
  },
];

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="mx-auto max-w-3xl px-4 space-y-12">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="px-4 py-1">
            Contact
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let’s Build Something Great Together
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            If you need someone who understands both cables and code, let’s
            build something solid.
          </p>
          <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip items={socialLinks} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
