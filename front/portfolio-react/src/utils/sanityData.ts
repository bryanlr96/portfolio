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
  const query = `*[_type == "project"] {_id, name, description, link, image}`

  try {
    return await client.fetch(query)
    
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}
