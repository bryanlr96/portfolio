import { useEffect, useState } from "react"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeaderMobile from "../components/HeaderMobile"
import ProjectsDisplay from "../components/ProjectsDisplay"
import { FaBars } from "react-icons/fa";

export default function Home() {
  const [headerMobileVisible, setHeaderMobileVisible] = useState(false)

  useEffect(() => {
    if (headerMobileVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [headerMobileVisible]);
  return (
    <>
      <button className="md:hidden fixed top-6 right-6 bg-blue-500 p-4 rounded cursor-pointer" onClick={() => { setHeaderMobileVisible(true) }}>
        <FaBars className="text-white" />
      </button>
      <HeaderMobile headerMobileVisible={headerMobileVisible} setHeaderMobileVisible={setHeaderMobileVisible} />
      <Header />
      <AboutMe />
      <main className="w-full min-h-[100vh] bg-[#303841] flex flex-col items-center py-[10vh]">
        <h2 className="text-white text-4xl uppercase mb-[10vh]">Proyectos</h2>
        <ProjectsDisplay />
      </main>
      <Contact />
      <Footer />
    </>
  )
}
