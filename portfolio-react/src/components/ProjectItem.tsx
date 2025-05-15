import { Project } from "../types";
import { urlFor } from "../utils/sanityClient";
import { Link } from "react-router-dom";
type ProjectItemProps = {
    project: Project
}

export default function ProjectItem({project} : ProjectItemProps) {
  return (
    <Link to={project.slug.current} className="w-full mx-auto">
        <img src={urlFor(project.image).url()} alt="portada del proyecto"  className="w-full aspect-video"/>
        <div className="w-full bg-blue-500 text-white flex items-center justify-center">
            <h3 className=" text-2xl py-3">{project.name}</h3>
        </div>
    </Link>
  )
}
