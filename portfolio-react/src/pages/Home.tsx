import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectsDisplay from "../components/ProjectsDisplay"

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <main className="w-full h-[100vh] bg-[#303841] flex flex-col items-center">
        <h2 className="text-white text-4xl uppercase my-[10vh]">Proyectos</h2>
        <ProjectsDisplay />
      </main>
      <Contact/>
      <Footer/>
    </>
  )
}
