import { Dispatch } from "react"

type HeaderMobileProps = {
    headerMobileVisible: boolean,
    setHeaderMobileVisible: Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderMobile({ headerMobileVisible, setHeaderMobileVisible }: HeaderMobileProps) {
    return (
        <div className={headerMobileVisible ? "md:hidden w-screen h-screen bg-black/80 flex flex-col fixed top-0 left-0 z-50 text-center" : "hidden"}>
            <ul className="w-full bg-blue-500 text-white">
                <li className="h-[46px] border-b-1 border-b-white" onClick={() => {setHeaderMobileVisible(false)}}>
                    <a href="#about" className="hover:underline">sobre mi</a>
                </li>
                <li className="h-[46px] border-b-1 border-b-white" onClick={() => {setHeaderMobileVisible(false)}}>
                    <a href="#projects" className="hover:underline">projectos</a>
                </li>
                <li className="h-[46px] border-b-1 border-b-white" onClick={() => {setHeaderMobileVisible(false)}}>
                    <a href="#contact" className="hover:underline">contacto</a>
                </li>
            </ul>
            <div onClick={() => { setHeaderMobileVisible(false) }}></div>
        </div>
    )
}
