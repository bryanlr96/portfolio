import { GlobalState, Action } from '../types/index'

export const initialState: GlobalState = {
    user: null,
    projects: [],
    technologies:[]
}

export const globalReducer = (state: GlobalState, action: Action): GlobalState => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload }
        case 'SET_PROJECTS':
            return { ...state, projects: action.payload }
        case 'SET-TECHNOLOGIES':
            return { ...state, technologies: action.payload}
        default:
            return state
    }
}
