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
    }
}

export type Project = {
    _id: string
    title: string
    description: string
    image?: {
        asset: {
            _ref: string
            _type: string
            url?: string
        }
    }
}

export type GlobalState = {
    user: Contact | null
    projects: Project[]
    selectedProject: Project | null
}

export type Action =
    | { type: 'SET_USER'; payload: Contact }
    | { type: 'SET_PROJECTS'; payload: Project[] }
    | { type: 'SELECT_PROJECT'; payload: Project }
