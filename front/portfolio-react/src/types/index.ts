export type Contact = {
    _id: string
    name: string
    title: string
    description: string
    phone: string
    email: string
    linkedin?: string
    github?: string
    image?: {
        asset: {
            _ref: string
            _type: string
            url?: string
        }
    },
    banner: {
        asset: {
            _ref: string
            _type: string
            url?: string
        }
    }
}

export type Project = {
    _id: string
    id: number
    name: string
    description: string
    slug: {
      current: string
    }
    github: string
    link: string
    technologies: {
      _ref: string
      _type: 'reference'
    }[]
    image: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
  }
  

export type GlobalState = {
    user: Contact | null
    projects: Project[]
}

export type Action =
    | { type: 'SET_USER'; payload: Contact }
    | { type: 'SET_PROJECTS'; payload: Project[] }
