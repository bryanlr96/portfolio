import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectsDisplay from "../components/ProjectsDisplay"
import { FaBars } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <button className=" md:hidden absolute top-6 right-6 bg-blue-500">
        <FaBars/>
      </button>
      <Header />
      <AboutMe />
      <main className="w-full min-h-[100vh] bg-[#303841] flex flex-col items-center py-[10vh]">
        <h2 className="text-white text-4xl uppercase mb-[10vh]">Proyectos</h2>
        <ProjectsDisplay />
      </main>
      <Contact/>
      <Footer/>
    </>
  )
}
