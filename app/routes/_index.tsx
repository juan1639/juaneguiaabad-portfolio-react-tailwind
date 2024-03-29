import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// --------------------------------------------------------------------
import { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Darkmode } from '../components/Darkmode'
import { Navbar } from '../components/Navbar'
import { Sobremi } from '../components/Sobremi'
import { MisHerramientas } from '../components/MisLenguajes'
import { MisProyectos } from '../components/MisProyectos'
import { Settings } from '../constants/constants'

export default function Index() {

  const [loadingJson, setLoadingJson] = useState(true)
  const [infoJson, setInfoJson] = useState({})
  const [infoJsonRepos, setInfoJsonRepos] = useState({})
  const [infoJsonVideos, setInfoJsonVideos] = useState({})

  const [mostrar, setMostrar] = useState('Proyectos')
  const [fetchDone, setFetchDone] = useState(false)

  const [modoOscuro, setModoOscuro] = useState(true)

  const endPoint = 'https://juan1639.github.io/JuanEguiaAbad-portfolio-react/proyectos.json'
  // console.log('url_base', Settings.endpointUrl.slice(0, -14))

  useEffect(() => {

    fetch(Settings.endpointUrl)
      .then(res => res.json())
      .then(response => {
        setLoadingJson(false)
        setInfoJson(response.proyectos)
        setInfoJsonRepos(response.recursos)
        setInfoJsonVideos(response.videos)
        console.log(response)
        setFetchDone(true)
      })
  
  }, [])

  useEffect(() => {
    // document.querySelector('html')?.classList.toggle('dark')
    if (modoOscuro) {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [modoOscuro])

  // const dataFooter = Settings.dataFooter

  // bg-gradient-to-b from-blue-200 to-blue-400
  // bg-gradient-to-b from-blue-300 to-blue-500

  return (
    <>
      <main className="block w-screen h-fit min-h-screen bg-blue-300 dark:bg-slate-700 mx-auto">

        <section className="flex w-screen h-fit py-2 bg-cyan-700 dark:bg-slate-800 sm:py-4">
          <Header foto='./assets/img/fotoJuan.jpg' nombre="Juan Eguía Abad" ocupacion="Programador autodidacta"/>
        </section>

        <section className="flex w-screen h-fit place-content-start py-2 bg-blue-200 dark:bg-slate-600 shadow shadow-white-200 sm:place-content-center sm:py-4">
          <Navbar mostrar={mostrar} setMostrar={setMostrar}/>
        </section>

        <section className="flex w-11/12 mx-auto h-fit px-2 py-2 sm:px-2 sm:py-6">
          <Darkmode modoOscuro={modoOscuro} setModoOscuro={setModoOscuro}/>
        </section>

        <section 
          className="block w-11/12 h-fit py-2 mx-auto rounded sm:place-content-start sm:py-4"
        >
          {
          mostrar === 'Sobre mí' && <Sobremi txtH2="Sobre mí"
            parrafo1='Me gusta programar de forma autodidacta, siendo mi principal afición el desarrollo de pequeños videojuegos. Concretamente la lógica de programación de dichos juegos es la parte que más me atrae.'
            parrafo2='Los proyectos que se pueden ver en esta página están hechos en su mayoría en vanilla javaScript.'
          />
          }
          {mostrar === 'Mis herramientas' && <MisHerramientas txtH2="Mis herramientas"/>}
          {mostrar === 'Vídeos' && <MisProyectos json={infoJsonVideos} txtH2="Mis vídeos" txtBoton="" />}
          {mostrar === 'Proyectos' && fetchDone && <MisProyectos json={infoJson} txtH2="Mis Proyectos" txtBoton="Jugar" />}
          {mostrar === 'Repositorios' && <MisProyectos json={infoJsonRepos} txtH2="Mis Repositorios" txtBoton="Ver" />}
        </section>

      </main>
    </>
  );
}
