import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    image: string;
    links: {
      github?: string;
      live?: string;
      demo?: string;
    };
    featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "bg-white/50 dark:bg-neutral-950/50 backdrop-blur-xl border border-border/40 rounded-lg shadow-[0_0_12px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.03),0_0_0_1px_rgba(34,42,53,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04)] hover:bg-white/60 dark:hover:bg-neutral-950/60",
        className
      )}
    >
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          {project.featured && (
            <div className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary mb-2">
              Featured Project
            </div>
          )}
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          {project.links.github && (
            <Button variant="outline" asChild>
              <Link
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Button>
          )}
          {project.links.live && (
            <Button asChild>
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Link>
            </Button>
          )}
          {project.links.demo && (
            <Button asChild>
              <Link
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}