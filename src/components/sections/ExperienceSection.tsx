import React from "react";

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
        
        {/* Header */}
        <div className="text-center space-y-6">
          <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm font-medium">
            Experience
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Professional Journey
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            My experience in IT support and infrastructure management has
            allowed me to maintain reliable systems, strengthen security
            practices, and support teams in fast-paced environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative space-y-2">
              <p className="text-sm text-muted-foreground">
                {exp.period}
              </p>

              <h3 className="text-lg font-semibold">
                {exp.title}
              </h3>

              <p className="text-muted-foreground">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;