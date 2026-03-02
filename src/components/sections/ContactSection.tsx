import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

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
            Need support with IT systems, infrastructure, or modern web
            development? I’m ready to contribute expertise and deliver results
            you can count on.
          </p>

          {/* LinkedIn Button */}
          <div className="pt-4 gap-4 flex justify-center">
            <Button asChild size="lg">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Work With Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
