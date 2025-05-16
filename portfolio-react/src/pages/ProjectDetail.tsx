import { useParams } from "react-router-dom"
import useGlobal from "../hooks/useGlobal"
import { getProjectBySlug, getTechById } from "../utils/sanityData"
import HeaderDetail from "../components/HeaderDetail"
import Footer from "../components/Footer"
import { urlFor } from "../utils/sanityClient"
import { FaGithub, FaLink } from 'react-icons/fa'

export default function ProjectDetail() {
    const { slug } = useParams()
    const { state } = useGlobal()

    const project = getProjectBySlug(state.projects, slug || '')
    const { technologies } = state
    if (!project) return <h1>Projecto no encontrado</h1>
    return (
        <>
            <HeaderDetail />
            <main className="bg-[#303841]  w-full min-h-[80vh]">
                <section className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center text-white">
                    <div className=" w-full flex flex-col my-10 md:my-20">
                        <img src={urlFor(project.image).url()} alt="imagen portada del proyecto" className="w-full md:w-[60%] lg:w-[50%] mx-auto" />
                        <h2 className="my-5">Tecnologias utilizadas:</h2>
                        <div className="w-full flex flex-wrap gap-3 justify-center sm:justify-start">
                            {project.technologies.map(technology => {
                                const tech = getTechById(technologies, technology._id)
                                return (
                                    <div key={technology._id} className=" flex gap-2 items-center justify-center bg-white py-1 px-4 rounded-full">
                                        <img src={urlFor(tech?.icon).url()} alt="icono" width={25} />
                                        <p className="text-xl text-black">{tech?.title}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <h1 className="text-4xl uppercase font-bold">{project.name}</h1>
                        <div className="w-full my-10 gap-5 flex flex-col">
                            {/* <p>{project.description}</p> */}
                            <div>
                                {project.description.split('\n').map((line, idx) =>
                                    line.trim() && <p key={idx} className="mb-4">{line}</p>
                                )}
                            </div>
                            <h2>Enlaces de interes:</h2>
                            <div className="w-full flex flex-col sm:flex-row gap-3">
                                <a href={project.github} className="py-2 w-full sm:w-1/2 bg-white text-black border-2 border-black font-bold flex items-center justify-center">
                                    <FaGithub className="mx-2" />
                                    GitHub
                                </a>
                                <a href={project.link} className="py-2 w-full sm:w-1/2 bg-white text-black border-2 border-black font-bold flex items-center justify-center">
                                    <FaLink className="mx-2" />
                                    Projecto
                                </a>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}
