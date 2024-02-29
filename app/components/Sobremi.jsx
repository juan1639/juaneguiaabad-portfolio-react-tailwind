import { Settings } from '../constants/constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCode, faCircleUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

export const Sobremi = ({txtH2, parrafo1, parrafo2}) => {

    return (
        <>
            <article className="flex w-full h-fit rounded-lg sm:flex flex-wrap justify-center"> 
                <div className="flex w-full h-fit mx-auto px-3 py-2 rounded bg-emerald-300 dark:bg-neutral-500 shadow shadow-slate-200 sm:px-6 sm:py-3">
                    <FontAwesomeIcon className="text-xl font-bold text-gray-800 dark:text-slate-200 pl-2 mt-2 mr-4" icon={faCircleUser}/>
                    <h2 className='flex w-fit h-fit font-bold text-2xl text-gray-700 dark:text-slate-300'>{txtH2}</h2>
                    {/* {mostrar && <FontAwesomeIcon className="h2 icono" icon={faCaretUp}/>} */}
                </div>

                <section className="flex flex-wrap w-full h-fit rounded-lg justify-around">
                    <div className='block w-full h-fit p-8 my-6 rounded-lg bg-neutral-900 shadow-inner shadow-stone-700 dark:shadow-slate-200 sm:w-5/12 sm:h-fit sm:p-8 sm:my-14 lg:p-12 lg:my-18'>
                        <p className='my-6 text-base text-slate-200 font-500 sm:text-lg'>{parrafo1}</p>
                        <p className='my-6 text-base text-slate-200 font-500 sm:text-lg'>{parrafo2}</p>

                        <div className='flex w-fit h-fit mx-auto mt-6 px-4 py-1 rounded-lg hover:bg-blue-400 hover:underline hover:translate-x-1'>
                            <a 
                                href="mailto:juaneguiabad1639@gmail.com"
                                className='text-base text-blue-300 font-500 italic sm:text-xl'
                            >Contactar conmigo <FontAwesomeIcon icon={faEnvelope} className="text-lg font-bold mt-2 ml-2"/>
                            </a>
                        </div>
                    </div>

                    <div className='block w-full h-fit py-6 rounded-lg sm:w-5/12 sm:h-fit sm:py-14'>
                        <div className='block w-full h-fit rounded-lg bg-blue-500 shadow shadow-stone-700 dark:shadow-stone-100 sm:w-full sm:h-fit'>
                            <div className='block w-full h-fit bg-cyan-200 dark:bg-neutral-400 rounded-lg'>
                                <h1 className='text-center text-xl py-2 bg-cyan-300 dark:bg-neutral-500 font-bold rounded-t-lg sm:text-2xl'>Ver otros de mis portfolios hechos en:</h1>
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
                        </div>
                    </div>
                </section>

                <section className="flex w-full h-fit rounded-lg justify-around">
                    <div 
                        className="flex flex-wrap w-full h-fit my-6 rounded-lg justify-around bg-blue-500 dark:bg-neutral-500 shadow shadow-stone-700 dark:shadow-stone-100 sm:w-5/12 sm:my-14"
                    >
   
                        <h3 className='flex w-fit h-fit p-4 text-xl font-bold text-gray-800 sm:text-2xl'>
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

    // const preFix = 'https://juan1639.github.io/juaneguiaabad/'
    const preFix = Settings.misTitulosUrlBase
    const urlTitulo = preFix + href

    return (
        <>
            <figure className='flex flex-wrap w-full h-fit bg-cyan-400 dark:bg-neutral-400 px-6 py-2'>
                <a className='flex gap-4 mt-2 hover:translate-x-2 hover:scale-115 sm:mt-6' id={id} href={urlTitulo} target="_blank">
                    <img className="w-12 h-12" src="./assets/img/titulo-ico.svg" alt="imagen icono html"/>
                    <figcaption className="text-base italic sm:text-lg">{children}</figcaption>
                </a>
                <hr className="w-11/12 h-[1px] mx-auto mt-1 bg-cyan-500 border-0 rounded dark:bg-gray-500 sm:mt-2"/>
            </figure>
        </>
    )
}
