import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "SportON Website",
    description:
      "E-commerce website built with Next.js and Tailwind CSS.",
    image: "/images/project1.png",
    badge: "E-Commerce",
    liveUrl: "https://sport-on-fe.vercel.app/", 
    details:
      "Full-stack e-commerce platform developed using Next.js and Tailwind CSS. The project includes a dynamic product listing system, category-based browsing, and structured UI components for product presentation. Designed with a focus on clean layout architecture, reusable components, and organized page structure to simulate a real-world online store experience.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="mx-auto max-w-5xl px-4 space-y-12">

        <div className="text-center space-y-6">
          <Badge variant="secondary" className="px-4 py-1">
            Projects
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Some of My Work
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            A showcase of my web development projects, highlighting modern, functional websites built with current frameworks and best practices
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <Card className="relative w-full pt-0 overflow-hidden justify-between">
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
                    <Button className="w-full">View Project</Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>

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
                    <Button variant="outline">Close</Button>
                  </DialogClose>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Live Preview</Button>
                    </a>
                  ) : (
                    <Button disabled>Coming Soon</Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}

          <Card className="flex aspect-[4/5] items-center justify-center border-dashed bg-muted">
            <div className="text-center space-y-4">
              <CardTitle className="text-lg">Coming Soon</CardTitle>
              <CardDescription className="text-base">
                More exciting projects are on the way.
              </CardDescription>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;