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
import { Settings } from '../constants/constants'

export default function Index() {

  const [loadingJson, setLoadingJson] = useState(true)
  const [infoJson, setInfoJson] = useState({})
  const [infoJsonRepos, setInfoJsonRepos] = useState({})
  const [infoJsonVideos, setInfoJsonVideos] = useState({})

  const endPoint = 'https://juan1639.github.io/JuanEguiaAbad-portfolio-react/proyectos.json'

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
      <main className="block max-w-[1280] h-screen bg-blue-300">
        <section className="flex max-w-[1280] h-fit py-4 bg-blue-400">
          <Header foto='./assets/img/fotoJuan.jpg' nombre="Juan Eguía Abad" ocupacion="Programador autodidacta"/>
        </section>

        <section className="flex max-w-[1280] h-fit py-4 place-content-center bg-blue-200">
          <Navbar />
        </section>
      </main>
    </>
  );
}
