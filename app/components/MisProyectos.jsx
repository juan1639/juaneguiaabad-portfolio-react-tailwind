import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretLeft, faCaretRight, faCaretUp, faVideo, faCode, faGamepad } from '@fortawesome/free-solid-svg-icons'

export const MisProyectos = ({json, txtH2, txtBoton}) => {

    console.log(json)

    return (
        <>
            <div className="flex w-full h-fit mx-auto px-3 py-1 rounded bg-emerald-300 shadow shadow-slate-200">
                <h2 className='flex w-fit h-fit font-bold text-2xl text-gray-700'>{txtH2}</h2>
                {txtBoton === 'Ver' && <FontAwesomeIcon className="text-lg font-bold text-gray-700 mt-2 ml-2" icon={faCode}/>}
                {txtBoton === 'Jugar' && <FontAwesomeIcon className="text-lg font-bold text-gray-700 mt-2 ml-2" icon={faGamepad}/>}
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
                    <img src={ruta} alt="Avatar" className="w-full h-9/12 mx-auto rounded-t border-2 border-white object-cover sm:mr-6 sm:w-24 sm:h-24"/>
                    <div className='absolute top-1/2 left-1/2 opacity-80 -translate-x-1/2 -translate-y-1/8 w-fit h-fit mx-auto'>
                        <button className="w-fit h-fit px-7 py-2 text-xl font-bold text-slate-200 rounded-lg bg-gradient-to-b from-red-600 to-red-800">{txtBoton}
                            {txtBoton === '' && <FontAwesomeIcon className="text-lg font-bold text-slate-200" icon={faCaretRight}/>}
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
