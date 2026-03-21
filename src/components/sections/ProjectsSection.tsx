import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

import { motion } from "motion/react"
import { useTranslation } from "react-i18next"

const ProjectsSection = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: t("project1_name"),
      description: t("project1_description"),
      image: "/images/project1.png",
      badge: t("project1_category"),
      liveUrl: "https://sport-on-fe.vercel.app/",
      details: t("project1_details"),
    },
  ]

  return (
    <section id="projects">
      <div className="mx-auto max-w-5xl px-4 space-y-12">

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <Badge variant="secondary" className="px-4 py-1">
            {t("projects_title")}
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("projects_subtitle")}
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            {t("projects_description")}
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="relative w-full pt-0 overflow-hidden justify-between h-full">
                  <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-20 aspect-video w-full object-cover"
                  />

                  <CardHeader>
                    <CardAction>
                      <Badge variant="secondary">{project.badge}</Badge>
                    </CardAction>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>

                  <CardFooter>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        {t("project1_button")}
                      </Button>
                    </DialogTrigger>
                  </CardFooter>
                </Card>
              </motion.div>

              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg"
                  />

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.details}
                  </p>
                </div>

                <div className="mt-6 flex justify-end gap-4">
                  <DialogClose asChild>
                    <Button variant="outline">
                      {t("button_close")}
                    </Button>
                  </DialogClose>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>{t("button_live")}</Button>
                    </a>
                  ) : (
                    <Button disabled>
                      {t("projects_coming_title")}
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.1 }}
          >
            <Card className="flex aspect-[4/5] items-center justify-center border-dashed bg-muted h-full">
              <div className="text-center space-y-4">
                <CardTitle className="text-lg">
                  {t("projects_coming_title")}
                </CardTitle>
                <CardDescription className="text-base">
                  {t("projects_coming_description")}
                </CardDescription>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection