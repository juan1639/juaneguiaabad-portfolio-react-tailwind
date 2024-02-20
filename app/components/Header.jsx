
export const Header = ({foto, nombre, ocupacion}) => {
    
    return (
        <>
            <article className="flex bg-gray-700 text-white mx-auto px-1 py-1 rounded-full">
                <div className="flex items-center">
                    <img src={foto} alt="Avatar" className="w-16 h-16 rounded-full border-2 border-white object-cover mr-3 sm:mr-6 sm:w-24 sm:h-24"/>
                    <div className="mr-6 sm:mr-9">
                        <div className="font-bold text-lg sm:mb-3 sm:text-4xl">{nombre}</div>
                        <div className="text-sm sm:text-2xl">{ocupacion}</div>
                    </div>
                </div>
            </article>
        </>
    )
}
