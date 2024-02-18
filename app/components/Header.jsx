
export const Header = ({foto, nombre, ocupacion}) => {
    
    return (
        <>
            <div class="flex bg-gray-700 text-white mx-auto px-1 py-1 rounded-full">
                <div class="flex items-center">
                    <img src={foto} alt="Avatar" class="w-24 h-24 rounded-full border-2 border-white object-cover mr-6"/>
                    <div class="mr-9">
                        <div class="font-bold text-4xl mb-3">{nombre}</div>
                        <div class="text-2xl">{ocupacion}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
