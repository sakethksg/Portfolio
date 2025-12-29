import React from "react";
import { Badge } from "../ui/badge";
import { GraduationCap, LucideArrowRight, LucideSparkles } from "lucide-react";
import { skillsData } from "@/app/data/skillsData";
import SkillsCard from "../SkillsCard";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutPreview = () => {
  return (
    <section className="py-18 mt-2 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 relative">
          <Badge variant="outline" className="mb-4 px-2 py-1">
            <span>
              <LucideSparkles className="w-4 h-4" />
            </span>
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Web, Learning AI
          </h2>
          <p className="text-lg max-w-2xl text-muted-foreground mx-auto">
            I&apos;m a developer exploring AI/ML and backend development. I
            enjoy building clean, modern Web and AI apps and continuously
            learning new things to level up my projects.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start mb-16">
          <div className="rounded-xl border border-border/40 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-xl shadow-[0_0_12px_rgba(34,42,53,0.04),0_1px_1px_rgba(0,0,0,0.03)] lg:col-span-2 p-6 hover:shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05)] hover:bg-white/60 dark:hover:bg-neutral-950/60 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap />
              </div>
              <h3 className="text-2xl font-semibold">Background</h3>
            </div>
            <p className="text-muted-foreground">
              I love exploring different tech fields and building projects that
              reflect my curiosity. I started with web development and now
              create modern apps using React, Next.js, and Node.js. Along the
              way, I picked up backend skills like API development, working with
              databases, and deploying applications. I&apos;m also comfortable
              using Linux and the terminal for daily development. Recently,
              I&apos;ve been diving into AI/ML—learning concepts like neural
              networks, regression, and classification. I&apos;m working toward
              combining AI with web to create smarter, user-friendly tools.
            </p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <SkillsCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                skills={skill.skills}
              />
            ))}
          </div>
        </div>
        <div className="text-center relative z-10">
          <Button asChild variant="default" size="lg">
            <Link
              href="/about"
              className="group flex items-center justify-center gap-1"
            >
              Learn More About Me
              <LucideArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
