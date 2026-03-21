import { motion } from "motion/react"
import { useTranslation } from "react-i18next"

const AboutSection = () => {
  const { t } = useTranslation()

  return (
    <section id="about">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto space-y-4"
      >
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("about_title")}
        </h2>

        <p className="text-muted-foreground leading-relaxed text-lg tracking-tight">
          {t("about_description")}
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection