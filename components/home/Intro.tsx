import React from "react";
import IP from "@/public/ip.jpeg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl flex flex-col mx-auto items-center text-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary/10 overflow-hidden">
            <Image src={IP} alt="Saketh" className="object-cover" priority />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-bold">
              Hi, I&apos;m Saketh
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl">
              AI/ML Enthusiast • Developer • Problem Solver
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="default" size="lg">
                <Link
                  href="/contact"
                >
                  Get in Touch
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link
                  href="/projects"
                >
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
