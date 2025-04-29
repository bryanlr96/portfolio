// schemas con los datos del usuario

import { Preview } from "sanity";

export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string', // Oficio (por ejemplo, "Frontend Developer")
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text', // Breve descripción sobre ti
      },
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string', // Número de teléfono
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string', // Correo electrónico
      },
      {
        name: 'linkedin',
        title: 'LinkedIn Profile',
        type: 'url', // URL de LinkedIn
      },
      {
        name: 'github',
        title: 'GitHub Profile',
        type: 'url', // URL de GitHub
      },
      {
        name: 'image',
        title: 'Profile Image',
        type: 'image', // Imagen de perfil
        options: {
          hotspot: true, // Activa la opción de hotspot para hacer recortes precisos
        },
      },
    ],
    preview:{
      select:{
        title: 'name',
        subtitle: 'title',
        media: 'image'
      }
    }
  }
  