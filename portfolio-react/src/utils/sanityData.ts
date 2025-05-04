import { Project, Technology } from '../types'
import { client } from './sanityClient'

// Obtener un solo contacto
export const fetchContact = async () => {
  const query = `*[_type == "contact"][0] {_id, name, title, description, phone, email, linkedin, github, image, banner}`

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

// Obtener todas las tecnologias
export const fetchTechnologies = async () => {
  const query = `*[_type == "technology"] {
    _id,
    title,
    icon {
      asset -> {
        url
      }
    }
  }`

  try {
    return await client.fetch(query)
  } catch (error) {
    console.error("Error fetching technologies:", error)
    return []
  }
}


// Filtra los proyectos por el slug
export const getProjectBySlug = (projects: Project[], slug: string): Project | null => {
  const project = projects.find(project => project.slug?.current === '/' + slug)
  return project ?? null
}

// Filtra las tecnologias por el id

export const getTechById = (technologies: Technology[] ,id: Technology['_id']): Technology | null =>{
  const tech = technologies.find(technology => technology._id === id)
  return tech ?? null
}