import useGlobal from "../hooks/useGlobal"
import ProjectItem from "./ProjectItem"

export default function ProjectsDisplay() {
    const { state } = useGlobal()
    const { projects } = state
    return (
        <section className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 scroll-mt-75 gap-8" id="projects">
        {
            (projects.length > 0) ? (
                projects.map(project => (
                    <ProjectItem project={project} key={project.id} />
                ))
            ) : (
                <h2>No hay proyectos</h2>
            )
            
        }
        </section>
    )
}
