import Link from "next/link";
import { projectsData } from "@/app/data/projects";
import { ProjectCard } from "../projects/ProjectCard";

export function FeaturedProjects() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg max-w-2xl text-muted-foreground mx-auto">
            A selection of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectCard project={project} className="h-full flex flex-col" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;