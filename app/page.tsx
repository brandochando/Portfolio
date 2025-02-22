import Hero from "./components/hero"
import Education from "./components/education"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Leadership from "./components/leadership"
import Skills from "./components/skills"

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Skills/>
      <Education />
      <Experience />
      <Projects />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  )
}

