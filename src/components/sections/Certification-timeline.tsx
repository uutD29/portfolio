"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";

const certificates = [
  {
    id: 1,
    issuer: "Google",
    name: "Google IT Support",
    description:
      "Complete program with multiple courses on system administration, networking, cybersecurity, and IT operations for real-world scenarios.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg",
    year: "2022",
  },
  {
    id: 2,
    issuer: "Microsoft",
    name: "Microsoft IT Support Specialist",
    description:
      "Series of courses on Windows administration, network management, cloud fundamentals, and enterprise-level IT support practices.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Microsoft_logo_-_2012_%28vertical%29.svg",
    year: "2023",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-12 relative space-y-4 px-4">
      <h2 className="text-2xl font-semibold tracking-tight">Certification</h2>

      {certificates.map((cert) => (
        <div
          key={cert.id}
          className="relative border-l border-border pl-6 space-y-8"
        >
          <Avatar className="absolute -left-4">
            <AvatarImage
              src={cert.logo}
              className="bg-background object-contain"
            />
            <AvatarFallback>{cert.issuer[0]}</AvatarFallback>
          </Avatar>

          <div className="relative">
            <Badge variant="secondary">{cert.issuer}</Badge>

            <h3 className="text-lg font-semibold mt-1">{cert.name}</h3>

            <p className="text-muted-foreground">{cert.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
