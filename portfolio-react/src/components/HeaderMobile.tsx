import { Dispatch } from "react"

type HeaderMobileProps = {
    headerMobileVisible: boolean,
    setHeaderMobileVisible: Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderMobile({ headerMobileVisible, setHeaderMobileVisible }: HeaderMobileProps) {
    return (
        <div
            className={`md:hidden w-screen h-screen bg-black/80 fixed top-0 left-0 z-50 flex flex-col transition-all duration-500 ease-in-out
        ${headerMobileVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
            onClick={() => setHeaderMobileVisible(false)}
        >
            <ul className="w-full bg-blue-500 text-white">
                <li className="h-[55px] border-b border-white flex items-center uppercase w-full" onClick={() => setHeaderMobileVisible(false)}>
                    <a href="#about" className="text-center hover:underline w-full">sobre mí</a>
                </li>
                <li className="h-[55px] border-b border-white flex items-center uppercase w-full" onClick={() => setHeaderMobileVisible(false)}>
                    <a href="#projects" className="text-center hover:underline w-full">proyectos</a>
                </li>
                <li className="h-[55px] border-b border-white flex items-center uppercase w-full" onClick={() => setHeaderMobileVisible(false)}>
                    <a href="#contact" className="text-center hover:underline w-full">contacto</a>
                </li>
            </ul>
        </div>
    );
}

