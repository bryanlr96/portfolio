import { createContext, useReducer, ReactNode, Dispatch, useEffect } from 'react'
import { globalReducer, initialState } from '../reducers/globalReducer'
import { GlobalState, Action } from '../types'
import { fetchContact, fetchProjects, fetchTechnologies } from '../utils/sanityData'

type GlobalContextType = {
    state: GlobalState
    dispatch: Dispatch<Action>
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)

    useEffect(()=> {
        const loadData = async () =>{
            try{
                // Pedimos la info a sanity
                const contact = await fetchContact()
                const projects = await fetchProjects()
                const technologies = await fetchTechnologies()

                // Si hay info la cargamos en el context
                if(contact) dispatch({type: 'SET_USER', payload: contact})
                if(projects.length > 0) dispatch({type: 'SET_PROJECTS', payload: projects})
                if(technologies.length > 0) dispatch({type: 'SET-TECHNOLOGIES', payload: technologies})
            }catch (error){
                console.error('Error al cargar los datos: ', error)
            }
        }

        loadData()
    },[])

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
