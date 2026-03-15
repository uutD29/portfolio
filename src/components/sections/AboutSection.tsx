import { motion } from "motion/react";

const AboutSection = () => {
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
          About
        </h2>

        <p className="text-muted-foreground leading-relaxed text-lg tracking-tight">
          I work in IT support and spend most of my time making sure systems run smoothly and people can actually get their work done. I enjoy troubleshooting, improving efficiency, and preventing the classic “it was working yesterday” situation.
        </p>
      </motion.div>
    </section>
  )
}

export default AboutSection