import useGlobal from "../hooks/useGlobal"
import ProjectItem from "./ProjectItem"

export default function ProjectsDisplay() {
    const { state } = useGlobal()
    const { projects } = state
    return (
        <section className="w-[80%] mx-auto grid grid-cols-3">
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
