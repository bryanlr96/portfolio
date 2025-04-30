import { Project } from "../types";
import { urlFor } from "../utils/sanityClient";

type ProjectItemProps = {
    project: Project
}

export default function ProjectItem({project} : ProjectItemProps) {
  return (
    <div className="w-[80%] mx-auto">
        <img src={urlFor(project.image).url()} alt="portada del proyecto"  className="w-full aspect-video"/>
        <div className="w-full bg-blue-500 text-white flex items-center justify-center h-[10vh]">
            <h3 className=" text-3xl">{project.name}</h3>
        </div>
    </div>
  )
}
