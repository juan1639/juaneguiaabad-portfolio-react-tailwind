// import { Settings } from "~/constants/constants"
import { Settings } from "../constants/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const Navbar = ({mostrar, setMostrar}) => {

    const [oculta, setOculta] = useState(true)

    const txtNavbar = Settings.txtNavbar

    const handleClick = () => {
        setOculta(!oculta)
    }

    const handleOption = (children) => {
        console.log(children)
        setMostrar(!mostrar)
    }

    return (
        <>
            <ul className="flex text-gray-600 sm:gap-20 sm:text-lg">
                <span className="flex w-12 h-12 justify-center items-center ml-2 rounded-lg bg-blue-100 sm:hidden"
                    onClick={handleClick}>
                    <FontAwesomeIcon class="h-4/5" icon={faAlignJustify}/>
                </span>
                {
                    txtNavbar.map(txt => {
                        return <Hero key={txt} handleOption={handleOption}>{txt}</Hero>
                    })
                }
            </ul>

            {!oculta && 
                <div className="flex-column z-10 w-screen min-h-screen bg-blue-100 py-6 px-4 rounded-t sm:hidden">
                    <div className="block w-full h-1 mb-4 bg-blue-200"></div>
                    {
                        txtNavbar.map(txt => {
                            return <HeroMobile key={txt} handleOption={handleOption}>{txt}</HeroMobile>
                        })
                    }
                </div>
            }
        </>
    )
} 

const Hero = ({children, handleOption}) => {

    return (
        <>
            <li className="hidden sm:flex sm:cursor-pointer sm:hover:bg-blue-100 sm:py-1 sm:px-4 sm:rounded"
                onClick={() => handleOption(children)}>{children}</li>
        </>
    ) 
}

const HeroMobile = ({children, handleOption}) => {

    return (
        <>
            <li className="flex cursor-pointer hover:bg-blue-100 py-1 px-4 font-medium text-gray-600 rounded sm:hidden"
                onClick={() => handleOption(children)}
            >{children}</li>
        </>
    )
}
