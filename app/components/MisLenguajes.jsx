import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretUp, faCode } from '@fortawesome/free-solid-svg-icons'
import { Settings } from '~/constants/constants'

export const MisHerramientas = ({txtH2}) => {

    const rutaLenguajeIco = Settings.mis_lenguajesImg;

    return (
        <>
            <article className="flex w-full h-fit gap-4 rounded-lg sm:flex flex-wrap justify-center"> 
                <div className="flex w-full h-fit mx-auto px-3 py-2 rounded bg-emerald-300 dark:bg-neutral-500 shadow shadow-slate-200 sm:px-6 sm:py-3">
                    <FontAwesomeIcon className="text-xl font-bold text-gray-800 dark:text-slate-200 pl-2 mt-2 mr-4" icon={faCode}/>
                    <h2 className='flex w-fit h-fit font-bold text-2xl text-gray-700 dark:text-slate-300'>{txtH2}</h2>
                    {/* {mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretUp}/>} */}
                </div>

                <section className='flex place-content-center w-11/12 h-fit mt-4 p-4 rounded-lg sm:mt-8 sm:p-8'>
                    <h1 className='text-lg font-bold text:gray-600 dark:text-slate-200 sm:text-2xl lg:text-3xl'>Tecnologías y lenguajes que suelo utilizar</h1>

                </section>

                <section 
                    className='flex flex-wrap w-11/12 h-fit justify-around gap-8 p-8 rounded-lg shadow shadow-stone-700 dark:shadow-stone-100 bg-blue-400 dark:bg-neutral-600 lg:gap-24 sm:p-12 sm:flex'
                >
                    {
                        rutaLenguajeIco.map((leng, index) => {

                            return (
                                <Hero lenguaje={leng}/>
                            )
                        })
                    }
                </section>

                <section
                    className='flex flex-wrap w-10/12 h-fit justify-start gap-8 p-8 rounded-lg border-2 shadow-inner dark:shadow-stone-100 bg-neutral-900 text-sm sm:text-lg text-slate-200 sm:p-12 sm:flex lg:text-2xl lg:gap-16 '
                >
                    <p>La mayoría de proyectos que se pueden ver en este portfolio están desarrollados en vanilla JavaScript, aunque también se pueden ver otros apoyándome en la librería Phaser para juegos, en python, incluso en lenguajes más antiguos, como Basic QB64 e incluso Ensamblador Z80.</p>
                    <p>Cada día aprendo nuevas tecnologías y estoy en continua evolución, aprendiendo en este momento otras como Astro.</p>
                    <p>Aunque hasta ahora he desarrollado mis proyectos desde la perspectiva fontend, en este momento estoy aprendiendo backend para programar también desde el lado del servidor.</p>
                </section>
            </article>
        </>
    )
}

const Hero = ({lenguaje}) => {

    return (
        <figure className='flex w-28 h-28 rounded-lg p-4 bg-neutral-800 lg:w-48 lg:h-48'>
            <img src={lenguaje} alt="imagen icono lenguaje programacion"/>
        </figure>
    )
}
