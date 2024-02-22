import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretUp, faPlay, faCirclePlay, faCode, faGamepad } from '@fortawesome/free-solid-svg-icons'

export const MisProyectos = ({json, txtH2, txtBoton}) => {

    console.log(json)

    return (
        <>
            <div className="flex w-full h-fit mx-auto px-3 py-2 rounded bg-emerald-300 shadow shadow-slate-200 sm:px-6 sm:py-3">
                {txtBoton === 'Ver' && <FontAwesomeIcon className="text-lg font-bold text-gray-700 mt-2 mr-2" icon={faCode}/>}
                {txtBoton === 'Jugar' && <FontAwesomeIcon className="text-lg font-bold text-gray-700 mt-2 mr-2" icon={faGamepad}/>}
                {txtBoton === '' && <FontAwesomeIcon className="text-lg font-bold text-gray-700 mt-2 mr-2" icon={faCirclePlay}/>}
                <h2 className='flex w-fit h-fit font-bold text-2xl text-gray-700'>{txtH2}</h2>
            </div>

            {
                <section className="flex w-full h-fit rounded-lg sm:flex flex-wrap justify-around">
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
            <div 
                className="block w-full h-full my-6 rounded-lg bg-blue-400 shadow shadow-stone-700 hover:scale-110 transition duration-1000 ease-in-out sm:w-5/12 sm:my-10"
            >
                <a className="relative w-fit h-fit sm:max-h-50" href={href} target="_blank">

                    <img 
                        src={ruta} alt="Avatar" 
                        className="w-full h-48 mx-auto rounded-t border-2 border-white-200 object-cover sm:h-64"
                    />

                    <div className='absolute top-1/2 left-1/2 opacity-80 -translate-x-1/2 -translate-y-1/8 w-fit h-fit mx-auto'>
                        <button className="w-fit h-fit px-7 py-2 hover:scale-150 transition duration-500 linear text-xl font-bold text-slate-200 rounded-xl bg-gradient-to-b from-red-600 to-red-800">{txtBoton}
                            {txtBoton === '' && <FontAwesomeIcon className="text-lg font-bold text-slate-200" icon={faCaretRight}/>}
                        </button>
                    </div>
                </a>

                <div className='flex w-full h-fit justify-between p-3 sm:p-5'>
                    <figure className='w-1/5 h-1/5'><img src={rutaLenguajeIco} alt="imagen icono lenguaje programacion"/></figure>
                    <div className='w-fit h-fit text-sm mt-4 font-bold sm:text-xl'><h5>{nombre}</h5></div>
                </div>
                <p className='p-3 text-xs'>{descripcion}</p>
            </div>
        </>
    )
}
