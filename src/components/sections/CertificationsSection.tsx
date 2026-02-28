import React from "react";

const certifications = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: "2023",
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2023",
  },
  {
    name: "Google IT Support Certificate",
    issuer: "Google",
    year: "2022",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-3xl px-4 space-y-16">

        {/* Header */}
        <div className="text-center space-y-6">
          <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm font-medium">
            Certifications
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Credentials
          </h2>

          <p className="text-muted-foreground">
            Professional certifications validating my technical knowledge and skills.
          </p>
        </div>

        {/* Certification List */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="rounded-lg border p-6 space-y-1"
            >
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;