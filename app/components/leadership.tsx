import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Leadership() {
  const leadershipData = [
    {
      company: "Management Leadership for Tomorrow",
      position: "Software Engineering Career Prep Fellow",
      link: "https://mlt.org",
      logo: "/MLT.png",
      description:
        "Selected from thousands of applicants to participate in a career preparation program focused on technical and professional development; Have been to several conferences in various states to network with tech giants and fellow software engineers",
    },
    {
      company: "Vanderbilt AKPsi Business Fraternity",
      position: "Social/Alumni Relations Chair, Analyst, Recruiter",
      link: "https://www.vanderbiltakpsi.com/",
      logo: "/akpsi.png",
      description:
        "Culled as one of 17 analysts for a 6-week business development and leadership program; As a member and former chair, I have mentored 400+ students via resume reviews, recruitment, and presentations about careers in the tech space, encouraging STEM careers",
    },
  ];

  return (
    <section className="py-40">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tight sm:text-4xl">
          LEADERSHIP AND PROFESSIONAL DEVELOPMENT
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {leadershipData.map((lead, index) => (
            <Card key={index} className="bg-zinc-800/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src={lead.logo || "/placeholder.svg"}
                  alt={`logo`}
                  width={64}
                  height={64}
                  style={{ width: "64", height: "auto" }}
                />
                <div>
                  <div className="flex flex-row items-center">
                    <CardTitle className="text-white mr-2">
                      {lead.company}
                    </CardTitle>
                    {lead.link && (
                      <a
                        href={lead.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink color="white" className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-white text-lg font-semibold">
                    {lead.position}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white font-light mt-2">{lead.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

