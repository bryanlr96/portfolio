import { Project } from '../types'
import { client } from './sanityClient'

// Obtener un solo contacto
export const fetchContact = async () => {
  const query = `*[_type == "contact"][0] {_id, name, title, description, phone, email, linkedin, github, image}`
  
  try {
    return await client.fetch(query)
  } catch (error) {
    console.error("Error fetching contact:", error)
    return null
  }
}

// Obtener proyectos
export const fetchProjects = async () => {
  const query = `*[_type == "project"] {_id, id, name, description, slug, github, link,
    technologies[]->{
      _id,
      name
    },
    image{
      asset->{
        url
      }
    }
  }`

  try {
    return await client.fetch(query)
    
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}


// Filtra los proyectos por el slug
export const getProjectBySlug = (projects: Project[], slug: string): Project | null => {
  const project = projects.find(project => project.slug?.current === slug)
  return project ?? null
}