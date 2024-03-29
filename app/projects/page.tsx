import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { getAllProjects } from "../lib/api";

const allProjects = getAllProjects();

console.log({ coucou: allProjects });

export default async function ProjectsPage() {
  if (!allProjects) {
    return <div>loading...</div>;
  }
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">Some of my projects.</p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          {allProjects.map((project) => {
            return (
              <Card key={project.key}>
                <Link href={project.url}>
                  <div className="block relative w-full h-full min-h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity group-hover:bg-opacity-50" />
                    <div className="relative z-10 p-4 md:p-8">
                      <h2 className="text-3xl font-bold text-white group-hover:text-zinc-100 sm:text-4xl font-display">
                        {project.title}
                      </h2>
                      <p className="mt-4 leading-8 duration-150 text-white group-hover:text-zinc-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
