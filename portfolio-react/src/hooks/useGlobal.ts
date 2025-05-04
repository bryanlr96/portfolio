import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error('useGlobal debe usarse dentro de GlobalProvider')
    }
    return context
}

export default useGlobal
