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
import { Navbar } from '../components/Navbar'
import { MisProyectos } from '../components/MisProyectos'
import { Settings } from '../constants/constants'

export default function Index() {

  const [loadingJson, setLoadingJson] = useState(true)
  const [infoJson, setInfoJson] = useState({})
  const [infoJsonRepos, setInfoJsonRepos] = useState({})
  const [infoJsonVideos, setInfoJsonVideos] = useState({})

  const [mostrar, setMostrar] = useState(false)

  const endPoint = 'https://juan1639.github.io/JuanEguiaAbad-portfolio-react/proyectos.json'
  // console.log('url_base', Settings.endpointUrl.slice(0, -14))

  useEffect(() => {

    fetch(Settings.endpoint)
      .then(res => res.json())
      .then(response => {
        setLoadingJson(false)
        setInfoJson(response.proyectos)
        setInfoJsonRepos(response.recursos)
        setInfoJsonVideos(response.videos)
        console.log(response)
      })
    
  }, [])

  // const dataFooter = Settings.dataFooter

  return (
    <>
      <main className="block w-screen h-fit min-h-screen bg-blue-300 mx-auto">
        <section className="flex w-screen h-fit py-2 bg-blue-400 sm:py-4">
          <Header foto='./assets/img/fotoJuan.jpg' nombre="Juan Eguía Abad" ocupacion="Programador autodidacta"/>
        </section>

        <section className="flex w-screen h-fit place-content-start py-2 bg-blue-200 sm:place-content-center sm:py-4">
          <Navbar mostrar={mostrar} setMostrar={setMostrar}/>
        </section>

        <section className="block w-11/12 h-fit py-2 mx-auto rounded sm:place-content-start sm:py-4">
          {mostrar && <MisProyectos json={infoJsonVideos} txtH2="Vídeos" txtBoton="" />}
        </section>
      </main>
    </>
  );
}
