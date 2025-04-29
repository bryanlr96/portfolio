// schema para los proyectos

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      initialValue: () => Math.floor(Math.random() * 1000), // Genera un ID aleatorio
      hidden: true,
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', // El slug se genera automáticamente a partir del nombre
        maxLength: 96,
      },
    },
    {
      name: 'github',
      title: 'GitHub Repo URL',
      type: 'url',
    },
    {
      name: 'link',
      title: 'Project URL',
      type: 'url',
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technology' }], // Referencia al esquema de tecnología
        },
      ],
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
}
