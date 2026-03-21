"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "../ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "motion/react"
import { useTranslation } from "react-i18next"

export function Certificates() {
  const { t } = useTranslation()

  const certificates = [
    {
      id: 1,
      issuer: t("cert1_issuer"),
      name: t("cert1_name"),
      description: t("cert1_description"),
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg",
      year: "2022",
      certificateImage: "/cert/Google-IWVL7LZUUVBQ9.jpg",
      button: t("cert1_button"),
    },
    {
      id: 2,
      issuer: t("cert2_issuer"),
      name: t("cert2_name"),
      description: t("cert2_description"),
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Microsoft_logo_-_2012_%28vertical%29.svg",
      year: "2023",
      certificateImage: "/cert/Microsoft-QB0VFRW9Q8R9.jpg",
      button: t("cert2_button"),
    },
  ]

  return (
    <section id="certifications" className="py-12 relative space-y-4 px-4">
      <motion.h2 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold tracking-tight"
      >
        {t("certification_title")}
      </motion.h2>

      {certificates.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
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

            <p className="text-muted-foreground mb-4">
              {cert.description}
            </p>

            <Button variant="outline" size="sm" asChild>
              <a
                href={cert.certificateImage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="size-3" />
                {cert.button}
              </a>
            </Button>
          </div>
        </motion.div>
      ))}
    </section>
  )
}