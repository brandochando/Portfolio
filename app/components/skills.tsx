import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Video } from "lucide-react";
import Image from "next/image";

export default function Skills() {
  const skillsData = 
    {
      languages: [
        "Python",
        "CSS",
        "HTML",
        "Javascript",
        "TypeScript",
        "Java",
        "C++",
        "SQL",
      ],
      framelib: [
        "Express.js",
        "Next.js",
        "Node.js",
        "React.js",
        "MATLAB",
        "React Native",
        "Redux",
        "Spring Boot",
        "Tailwind CSS",
      ],
      softools: [
        "CocoaPods",
        "Figma",
        "Firebase",
        "GitHub",
        "GraphQL",
        "grpc",
        "Jira",
        "Make",
        "MongoDB",
        "Netlify",
        "npm",
        "REST",
        "Unix",
        "Xcode",
      ],
    };

  return (
    <section className="py-40">
      <div className="flex justify-center">
        <div className="max-w-[60%]">
          <h3 className="mb-[50px] text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Hey, glad you could make it to my portfolio!
          </h3>
          <h3 className="mb-[60%] text-center text-2xl font-bold tracking-tight sm:text-3xl">
            I'm Brandon and I'm a well-rounded, language-agnostic software
            engineer with start-up and industry experience and the ability to
            quickly grasp new technologies, programming languages, and
            application ecosystems.
          </h3>
          <h3 className="mb-[60%] text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Here's a bit about me.
          </h3>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tight sm:text-4xl">
          SKILLS
        </h2>
        <div className="mb-4 flex flex-wrap gap-2 justify-center">
          <div className="font-bold text-[16px]">Languages: </div>
          {skillsData.languages.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full bg-zinc-600/30 backdrop-blur-sm px-3 py-1 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mb-4 flex flex-wrap gap-2 justify-center">
          <div className="font-bold text-[16px]">Frameworks & Libraries: </div>
          {skillsData.framelib.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full bg-zinc-600/30 backdrop-blur-sm px-3 py-1 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mb-4 flex flex-wrap gap-2 justify-center">
          <div className="font-bold text-[16px]">Software & Tools: </div>
          {skillsData.softools.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full bg-zinc-600/30 backdrop-blur-sm px-3 py-1 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
