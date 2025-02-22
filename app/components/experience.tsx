import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Experience() {
  const experienceData = [
    {
      position: "Full-Stack Software Engineering Intern",
      company: "LinkedIn",
      logo: "/LinkedIn.png?height=100&width=100",
      period: "May 2024 – Aug 2024",
      responsibilities: [
        "Owned design and implementation of a file-structured sorting tool, enabling employee dataset retrieval by team for data scientists",
        <>
          Optimized API performance via asynchronous calls and caching for
          dataset fetching,{" "}
          <span className="underline decoration-2 decoration-sky-500 font-semibold">
            reducing latency by 6 seconds
          </span>{" "}
          and{" "}
          <span className="underline decoration-2 decoration-sky-500 font-semibold">
            improving browse performance by 30%
          </span>
          . Tool{" "}
          <span className="underline decoration-2 decoration-sky-500 font-semibold">
            {" "}
            operational in present environment
          </span>
          , consistently enhancing internal performance
        </>,
        "Collaborated with 15+ team members on the Datahub team and external teams to debug, develop, and adapt cross-team APIs",
        "Resolved issues with legacy ownership models, API integration, and async data aggregation, improving performance and ensuring accurate dataset metrics. Implemented retry logic to handle network-related failures and boost throughput",
      ],
      environment:
        "Figma, GitHub, Jira, Java, JavaScript, SQL, GraphQL, grpc, Rest.li, Spring Boot, Node.js, JUnit",
    },
    {
      position: "Full-Stack Software Engineering Intern",
      company: "BRKT",
      link: "https://www.brkt.gg/",
      logo: "/BRKT.svg?height=100&width=100",
      period: "Sept 2024 – Oct 2024",
      responsibilities: [
        <>
          Developed full-stack architecture for multi-chain, multi-market
          betting platform, yielding{" "}
          <span className="underline decoration-2 decoration-orange-500 font-semibold">
            300,000+
          </span>{" "}
          users within 6 months of launch
        </>,
        "Maintained blockchain frameworks for secure and decentralized transaction validation.",
      ],
      environment:
        "Figma, GitHub, Jira, Java, JavaScript, SQL, GraphQL, grpc, Rest.li, Spring Boot, Node.js, JUnit",
    },
    {
      position: "LLM Trainer/Prompt Engineer",
      company: "Scale AI",
      logo: "/ScaleAI.png?height=100&width=100",
      period: "July 2023 – Feb 2024",
      responsibilities: [
        <>
          Trained generative artificial intelligence models by correcting and
          rewriting code responses from{" "}
          <span className="underline decoration-2 decoration-purple-500 font-semibold">
            150+
          </span>{" "}
          personalized, sequential prompts
        </>,
      ],
      environment: "Python, Java",
    },
  ];

  return (
    <section className="py-40">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tight sm:text-4xl">
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <Card key={index} className="bg-zinc-800/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={exp.logo || "/placeholder.svg"}
                  alt={`${exp.company} logo`}
                  width={64}
                  height={64}
                />
                <div>
                  <div className="flex flex-row items-center">
                    <CardTitle className="text-white mr-2">
                      {exp.company}
                    </CardTitle>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink color="white" className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-lg font-semibold text-white">
                    {exp.position}
                  </p>
                  <p className="text-md mt-[-2px] font-medium text-gray-400">
                    {exp.period}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mx-6 list-disc text-white list-outside font-light">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>
                      <p>{resp}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 ml-2 text-white font-light">
                  <span className="font-semibold">Technical Environment: </span>
                  {exp.environment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

