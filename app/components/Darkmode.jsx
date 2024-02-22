import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

export const Darkmode = ({modoOscuro, setModoOscuro}) => {

    const queBotonMostrar = modoOscuro ? faToggleOn : faToggleOff

    const handleBotonDarkMode = () => {
        setModoOscuro(!modoOscuro)
    }
    
    return (
        <>
            <article className="flex justify-end w-full h-fit">
                <button 
                    className='text-xs font-500 text-gray-700 dark:text-slate-200 pl-2 sm:text-base'
                    onClick={handleBotonDarkMode}>Darkmode<FontAwesomeIcon 
                    className="text-xl font-bold text-gray-700 dark:text-slate-200 pl-2 hover:scale-y-125 sm:text-2xl" icon={queBotonMostrar}/>
                </button>
                
            </article>
        </>
    )
}
