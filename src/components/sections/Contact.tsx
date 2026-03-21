"use client"

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageSquareMore,
} from "lucide-react"
import { AnimatedTooltip } from "../ui/animated-tooltip"
import { useTranslation } from "react-i18next"

const ContactSection = () => {
  const { t } = useTranslation()

  const socialLinks = [
    {
      id: 1,
      name: t("social_github"),
      description: t("social_github_desc"),
      href: "https://github.com/uutD29/",
      icon: <Github className="w-6 h-6" />,
    },
    {
      id: 2,
      name: t("social_linkedin"),
      description: t("social_linkedin_desc"),
      href: "https://www.linkedin.com/in/uhud-tarbani-459541379/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      id: 3,
      name: t("social_whatsapp"),
      description: t("social_whatsapp_desc"),
      href: "https://wa.me/6285155075772",
      icon: <MessageSquareMore className="w-6 h-6" />,
    },
    {
      id: 4,
      name: t("social_email"),
      description: t("social_email_desc"),
      href: "mailto:uhud.trb@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
  ]

  const navLinks = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_projects"), href: "#projects" },
    { name: t("nav_experience"), href: "#experience" },
  ]

  return (
    <section
      id="contact"
      className="w-full bg-background pt-24 pb-10 px-6 md:px-12 border-t border-border/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
          
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              {t("contact_cta_label")}
            </p>

            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter hover:italic transition-all cursor-pointer">
              {t("contact_cta_title")}{" "}
              <span className="inline-block animate-bounce">↓</span>
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
              {t("contact_email")}
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection