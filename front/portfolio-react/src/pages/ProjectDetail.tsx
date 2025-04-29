import { useParams } from "react-router-dom"
import useGlobal from "../hooks/useGlobal"
import { getProjectBySlug } from "../utils/sanityData"
import Header from "../components/Header"


export default function ProjectDetail() {
    const { slug } = useParams()
    const { state } = useGlobal()

    const project = getProjectBySlug(state.projects, slug || '')

    if (!project) return <h1>Projecto no encontrado</h1>
    return (
        <>
            <Header/>
            <h1>{project.name}</h1>
        </>
    )
}
