import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Video } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projectsData = [
    {
      title: "GroupGains",
      description: (
        <>
          <p className="mb-1">
            End-to-end web and mobile development for a community-based gym app,
            connecting users based on their fitness goals.
          </p>
          <p>
            Chosen to participate in NSF I-Corps: Ideator and Builder
            pre-accelerators and earned{" "}
            <span className="underline decoration-2 decoration-orange-600 font-semibold">
              $2,500
            </span>{" "}
            in development and network funding after pitching.
          </p>
        </>
      ),
      preview: "/groupgains.png?height=300&width=600",
      technologies: [
        "Figma",
        "Firebase",
        "GitHub",
        "React.js",
        "React Native",
        "Netlify",
        "Next.js",
        "Node.js,",
        "Python",
        "Redux",
        "Tailwind CSS",
        "Xcode",
      ],
      live: "https://groupgains.co",
    },
    {
      title: "Sokoban Solver",
      description:
        "Sokoban solver created using heuristics and foundational AI algorithms such as Iterative Deepening DFS, BFS, Greedy BFS, and A*",
      preview: "/sokoban.gif?height=300&width=600",
      technologies: ["Python"],
      github: "https://github.com/brandochando/Sokoban/tree/main",
    },
    {
      title: "FlatFair",
      description:
        "Co-developed a full-stack expense-sharing web app, enabling groups to track, split, and settle expenses with monthly analytics",
      preview: "/FlatFair.png?height=300&width=600",
      technologies: [
        "TypeScript",
        "React.js",
        "Next.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "GitHub",
        "Jest",
        "Tailwind CSS",
        "SendGrid",
        "Vercel",
      ],
      live: "https://flat-fair-app.vercel.app/",
      demo: "https://drive.google.com/file/d/1JhygaxjQ-XLzDIPaRFkjbxxDTWz8AgYi/view?usp=sharing",
    },
  ];

  return (
    <section className="py-40">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tight sm:text-4xl">
          PROJECTS
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card key={index} className="bg-zinc-800/50 backdrop-blur-sm">
              <CardHeader>
                <Image
                  src={project.preview || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  width={600}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-white">
                  {project.title}
                </CardTitle>
                <div className="mb-4 text-white">{project.description}</div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Site
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Video className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="w-full flex justify-center items-center mt-8">
          <div className="mr-4 text-lg font-bold">This portfolio: </div>
          <Button variant="outline" size="sm" asChild>
            <a
              href={"https://github.com/brandochando/Portfolio"}
              className="text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

