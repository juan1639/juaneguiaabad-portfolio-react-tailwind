// import { Settings } from "~/constants/constants"
import { Settings } from "../constants/constants"

export const Navbar = () => {

    const txtNavbar = Settings.txtNavbar

    return (
        <>
            <ul className="flex space-x-20 text-lg text-gray-600">
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
        <li className="cursor-pointer hover:bg-blue-100 py-1 px-4 rounded">{children}</li>
    )
}
