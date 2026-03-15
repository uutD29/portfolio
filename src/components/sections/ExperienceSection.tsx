import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const experiences = [
  {
    period: "2020 – Present",
    title: "IT Support Specialist",
    description:
      "Managed hardware, software, and network troubleshooting while implementing security best practices and maintaining system reliability.",
  },
  {
    period: "2025 – Present",
    title: "Web Developer",
    description:
      "Designed and developed responsive websites using modern frameworks, ensuring optimal performance and user experience across devices.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="mx-auto max-w-3xl px-4 space-y-16">
        

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <Badge variant="secondary" className="px-4 py-1">
            Experience
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Professional Journey
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            My experience in IT support and infrastructure management has
            allowed me to maintain reliable systems, strengthen security
            practices, and support teams in fast-paced environments.
          </p>
        </motion.div>


        <div className="relative border-l border-border pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative space-y-2"
            >
              <p className="text-sm text-muted-foreground">
                {exp.period}
              </p>

              <h3 className="text-lg font-semibold">
                {exp.title}
              </h3>

              <p className="text-muted-foreground">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;