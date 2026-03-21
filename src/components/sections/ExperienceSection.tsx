import { Badge } from "../ui/badge"
import { motion } from "motion/react"
import { useTranslation } from "react-i18next"

const ExperienceSection = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      period: t("job1_period"),
      title: t("job1_title"),
      description: t("job1_description"),
    },
    {
      period: t("job2_period"),
      title: t("job2_title"),
      description: t("job2_description"),
    },
  ]

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
            {t("experience_title")}
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("experience_subtitle")}
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            {t("experience_description")}
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
  )
}

export default ExperienceSection