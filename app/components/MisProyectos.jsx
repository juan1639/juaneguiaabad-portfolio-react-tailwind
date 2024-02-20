import { Settings } from '../constants/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faVideo, faCode, faGamepad } from '@fortawesome/free-solid-svg-icons'

export const MisProyectos = ({json, txtH2, txtBoton}) => {

    console.log(json)

    const icoGamepad= txtBoton === 'Jugar' ? true : false
    const icoYoutube = txtBoton === '' ? true : false
    const icoRepo = txtBoton === 'Repositorio' ? true : false

    /* const handleCarrusel = (direccion) => {
        
        if (direccion === 'iz' && desplaza > -((json.length - 1) * Settings.offSetHorizontalElementos)) {
            setDesplaza(desplaza - Settings.offSetHorizontalElementos)
        
        } else if (direccion === 'de' && desplaza < Settings.offSetHorizontalElementos) {
            setDesplaza(desplaza + Settings.offSetHorizontalElementos)
        }
    } */

    return (
        <>
            
                <div className="flex w-fit h-fit mx-auto font-bold text-lg bg-yellow-400">
                    <h2 className='flex w-fit h-fit'>{txtH2}</h2>
                </div>

                {
                    <section className="flex-wrap w-full h-fit rounded-lg">
                        {
                            json.map((proyecto, index ) => {

                                return (
                                    <Tarjeta 
                                        key={proyecto.nombre}
                                        img={proyecto.imagen}
                                        href={proyecto.url}
                                        nombre={proyecto.nombre}
                                        descripcion={proyecto.descripcion}
                                        txtBoton={txtBoton}
                                        lenguaje={proyecto.lenguaje}
                                    ></Tarjeta>
                                )

                            })
                        }

                    </section>
                }
            
        </>
    )
}

export const Tarjeta = ({img, href, nombre, descripcion, txtBoton, lenguaje}) => {

    const asset = './assets'
    const ruta = asset + img.slice(5)
    console.log(ruta)
    
    const rutaLenguajeIco = asset + lenguaje.slice(5);

    return (          
        <>
            <div className="block w-full h-full my-9 rounded-lg bg-blue-400">
                <a className="relative w-fit h-fit" href={href} target="_blank">
                    <img src={ruta} alt="Avatar" className="w-full h-9/12 mx-auto rounded border-2 border-white object-cover sm:mr-6 sm:w-24 sm:h-24"/>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/8 w-fit h-fit mx-auto'>
                        <button className="w-fit h-fit px-4 py-1 text-lg font-bold text-slate-200 rounded-lg bg-red-700">{txtBoton}
                            <FontAwesomeIcon className="text-lg font-bold text-slate-200" icon={faCaretRight}/>
                        </button>
                    </div>
                </a>

                <div className='flex w-full h-fit justify-between p-3'>
                    <figure className='w-1/5 h-1/5'><img src={rutaLenguajeIco} alt="imagen icono html"/></figure>
                    <div className='w-fit h-fit text-sm mt-4 font-bold'><h5>{nombre}</h5></div>
                </div>
                <p className='p-3 text-xs'>{descripcion}</p>
            </div>
        </>
    )
}
