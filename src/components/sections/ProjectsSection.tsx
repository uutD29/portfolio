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

import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    title: "SportON Website",
    description:
      "E-commerce website built with Next.js, Tailwind CSS, and Railway.",
    image: "/images/project1.png",
    badge: "Featured",
    liveUrl: "https://sport-on-fe.vercel.app/", 
    details:
      "SportON is a fully responsive e-commerce platform developed using Next.js and styled with Tailwind CSS for a modern, utility-first design system. The application leverages server-side rendering and optimized routing to ensure fast performance and strong SEO. It features dynamic product listings, detailed product pages with high-quality visuals, and a structured layout focused on user experience. The project is deployed on Railway, ensuring reliable hosting and seamless deployment workflows. Special attention was given to performance optimization, clean component architecture, and scalable code structure to support future growth and feature expansion.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="mx-auto max-w-5xl px-4 space-y-12">

        <div className="text-center space-y-6">
          <span className="inline-block rounded-full bg-muted px-4 py-1 text-sm font-medium">
            Projects
          </span>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Some of My Work
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            A showcase of projects that demonstrate my skills in Web
            Development, IT Support, and Infrastructure Management.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <Card className="relative w-full pt-0 overflow-hidden">
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

                  <ScrollArea className="h-48 w-full rounded-md border p-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.details}
                    </p>
                  </ScrollArea>
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