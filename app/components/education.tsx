import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Vanderbilt University",
      logo: "/VandyLogo.png",
      date: "Aug 2021 – May 2025",
      details: (
        <>
          <span className="underline decoration-2 decoration-yellow-600 font-semibold">
            Relevant coursework
          </span>
          <span className="font-semibold">:</span> Programming & Problem
          Solving, Program Design & Data Structures, Intermediate Software
          Design, Digital Systems, Programming Languages, Discrete Structures,
          Algorithms, Principles of OS, Principles of SWE, Computer Ethics,
          Multivariable Calculus, Linear Algebra, Probability & Mathematical
          Statistics, Differential Equations, Data Visualization, Artificial
          Intelligence & Machine Learning"
        </>
      ),
    },
    {
      degree: "Minor in Business",
      institution: "Vanderbilt University",
      logo: "/VandyLogo.png",
      date: "Aug 2021 – May 2025",
      details: (
        <>
          <span className="underline decoration-2 decoration-yellow-600 font-semibold">
            Relevant coursework
          </span>
          <span className="font-semibold">:</span> Entrepreneurship,
          Macro/Microeconomics, Negotiation, Organizational Behavior, Business
          Core
        </>
      ),
    },
  ];

  return (
    <section className="py-40">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tighter sm:text-4xl">
          EDUCATION
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-zinc-800/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={edu.logo || "/placeholder.svg"}
                  alt="logo"
                  width={1501}
                  height={1054}
                  style={{ width: 64, height: "auto" }}
                />
                <div>
                  <CardTitle className="text-white">
                    {edu.institution}
                  </CardTitle>
                  <p className="text-white text-lg font-semibold">
                    {edu.degree}
                  </p>
                  <p className="text-md mt-[-2px] font-medium text-gray-400">
                    {edu.date}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white font-light mt-2">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
