// schemas para cada tecnologia

export default {
    name: 'technology',
    title: 'Technology',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Technology Title',
        type: 'string', // Título de la tecnología (ej. React, Node.js)
      },
      {
        name: 'icon',
        title: 'Technology Icon',
        type: 'image', // Icono de la tecnología (puede ser una imagen)
        options: {
          hotspot: true,
        },
      },
      {
        name: 'color',
        title: 'Technology Color',
        type: 'string', // Color asociado a la tecnología (en formato hexadecimal o color CSS)
        description: 'Color to represent the technology',
      },
    ],
    preview:{
      select:{
        title: 'title',
        media: 'icon'
      }
    }
  }
  