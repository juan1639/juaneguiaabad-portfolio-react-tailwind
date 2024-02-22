import { Settings } from '../constants/constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCode, faCircleUser, faUserGraduate, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

export const Sobremi = ({txtH2, parrafo1, parrafo2}) => {

    return (
        <>
            <article className="flex w-full h-fit rounded-lg sm:flex flex-wrap justify-center"> 
                <div className="flex w-full h-fit mx-auto px-3 py-2 rounded bg-emerald-300 shadow shadow-slate-200 sm:px-6 sm:py-3">
                    <FontAwesomeIcon className="text-xl font-bold text-gray-800 pl-2 mt-2 mr-4" icon={faCircleUser}/>
                    <h2 className='flex w-fit h-fit font-bold text-2xl text-gray-700'>{txtH2}</h2>
                    {/* {mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretUp}/>} */}
                </div>

                <section className="flex flex-wrap w-full h-fit rounded-lg justify-around">
                    <div className='block w-full h-fit pl-2 pr-1 py-6 rounded-lg sm:w-5/12 sm:h-fit sm:px-2 sm:py-8'>
                        <p className='my-6 text-base font-500 sm:text-lg'>{parrafo1}</p>
                        <p className='my-6 text-base font-500 sm:text-lg'>{parrafo2}</p>
                    </div>

                    <div className='block w-full h-fit py-6 rounded-lg sm:w-5/12 sm:h-fit sm:py-14'>
                        <div className='block w-full h-fit px-1 py-6 rounded-lg bg-gradient-to-b from-cyan-400 to-blue-500 shadow shadow-stone-700 sm:w-full sm:h-fit sm:px-2 sm:py-8'>
                            <div className='block w-full h-fit px-1 pt-4 rounded-lg bg-cyan-300 sm:px-2 sm:pt-6'>
                                <h1 className='text-center text-xl font-bold sm:text-2xl'>Ver otros de mis portfolios hechos en:</h1>
                                <ul className='w-full h-fit p-6 mt-6'>
                                    <a 
                                        href="https://juan1639.github.io/juaneguiaabad" target='_blank'
                                    ><li className='text-lg font-500 italic mb-6 rounded-lg hover:bg-blue-300 hover:translate-x-1'>
                                        <FontAwesomeIcon className="text-lg font-bold pl-2 mt-2 mr-4" icon={faCode}/>Vanilla JavaScript</li>
                                    </a>

                                    <a 
                                        href="https://juan1639.github.io/JuanEguiaAbad-portfolio-react" target='_blank'
                                    ><li className='text-lg font-500 italic mb-6 rounded-lg hover:bg-blue-300 hover:translate-x-1'>
                                        <FontAwesomeIcon className="text-lg font-bold pl-2 mt-2 mr-4" icon={faCode}/>React</li>
                                    </a>
                                </ul>
                            </div>

                            <div className='flex w-fit h-fit justify-center hover:bg-blue-300 hover:underline hover:translate-x-1 px-4 py-1 mt-6 ml-4 rounded-lg'>
                                <a 
                                    href="mailto:juaneguiabad1639@gmail.com"
                                    className='text-lg font-500 italic'
                                >Contactar conmigo <FontAwesomeIcon icon={faEnvelope} className="text-lg font-bold mt-2 ml-2"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex w-full h-fit rounded-lg justify-start">
                    <div className="flex flex-wrap w-full h-fit rounded-lg justify-around bg-blue-500 shadow shadow-stone-700 sm:w-5/12">
   
                        <h3 className='flex w-fit h-fit p-4 text-2xl font-bold text-gray-800'>
                            <FontAwesomeIcon className="text-lg font-bold pl-2 mt-2 mr-4" icon={faUserGraduate}/>Mis títulos
                        </h3>

                        {
                            Object.keys(Settings.misTitulos).map(titulo => {

                                return (
                                    <Titulo 
                                        key={Settings.misTitulos[titulo].id}
                                        id={Settings.misTitulos[titulo].id}
                                        href={Settings.misTitulos[titulo].href}
                                    >{Settings.misTitulos[titulo].texto}</Titulo>
                                )
                            })
                        } 
                    </div>
                </section>
                    
            </article>
        </>
    )
}

export const Titulo = ({id, href, children}) => {

    return (
        <>
            <figure className='flex w-full h-fit bg-gradient-to-b from-cyan-400 to-blue-500 my-2 px-6 py-2'>
                <a className='flex gap-4  hover:translate-x-2 hover:scale-115' id={id} href={href} target="_blank">
                    <img className="w-12 h-12" src="./assets/img/titulo-ico.svg" alt="imagen icono html"/>
                    <figcaption className="text-lg italic">{children}</figcaption>
                </a>
            </figure>
        </>
    )
}
