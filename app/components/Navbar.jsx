// import { Settings } from "~/constants/constants"
import { Settings } from "../constants/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

    const txtNavbar = Settings.txtNavbar

    return (
        <>
            <ul className="flex text-gray-600 sm:gap-20 sm:text-lg">
                <span className="flex w-12 h-12 justify-center items-center ml-2 rounded-lg bg-blue-100 sm:hidden">
                    <FontAwesomeIcon class="h-4/5" icon={faAlignJustify}/>
                </span>
                {
                    txtNavbar.map(txt => {

                        return <Hero>{txt}</Hero>
                    })
                }
            </ul>
        </>
    )
}

const Hero = ({children}) => {

    return (
        <li className="hidden sm:flex sm:cursor-pointer sm:hover:bg-blue-100 sm:py-1 sm:px-4 sm:rounded">{children}</li>
    )
}
