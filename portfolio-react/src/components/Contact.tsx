import useGlobal from "../hooks/useGlobal"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
    const { state } = useGlobal()
    const user = state
    return (
        <section className="w-full h-[80vh] bg-black text-white flex flex-col items-center border-b-6 border-b-blue-500 scroll-mt-20" id="contact">
            <h2 className="text-4xl uppercase py-[10vh]"> contacto</h2>
            <h3 className=" hidden md:block md:text-2xl lg:text-3xl text-center">¿Quieres ponerte en contacto conmigo y no sabes cómo? <br /> Aquí tienes algunas opciones:</h3>
            <h3 className=" md:hidden text-xl text-center">¿Quieres ponerte en contacto conmigo? <br /> Aquí tienes algunas opciones:</h3>

            <ul className="grid grid-cols-1 lg:grid-cols-2 w-[60%] md:w-[80%] lg:w-[60] lg:min-w-[900px] mx-auto mt-[10vh] text-lg md:text-2xl gap-5">
                <li className="flex items-center">
                    <a href={`mailto:${user.user?.email}`} className="text-blue-500 hover:text-blue-700 items-center hidden md:flex">
                        <FaEnvelope className="mr-2" /> {user.user?.email}
                    </a>
                    <a href={`mailto:${user.user?.email}`} className="text-blue-500 hover:text-blue-700 items-center flex md:hidden">
                        <FaEnvelope className="mr-2" /> Email
                    </a>
                </li>
                <li className="flex items-center ">
                    <a href={user.user?.linkedin} className="text-blue-500 hover:text-blue-700 items-center hidden md:flex truncate overflow-hidden whitespace-nowrap max-w-full">
                        <FaLinkedin className="mr-2" /> {user.user?.linkedin}
                    </a>
                    <a href={user.user?.linkedin} className="text-blue-500 hover:text-blue-700  items-center flex md:hidden">
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                </li>
                <li className="flex items-center ">
                    <a href={`tel:+34${user.user?.phone}`} className="text-blue-500 hover:text-blue-700 items-center flex">
                        <FaPhone className="mr-2" /> +34 {user.user?.phone}
                    </a>
                    
                </li>
                <li className="flex items-center">
                    <a href={user.user?.github} className="text-blue-500 hover:text-blue-700 items-center hidden md:flex">
                        <FaGithub className="mr-2" /> {user.user?.github}
                    </a>
                    <a href={user.user?.github} className="text-blue-500 hover:text-blue-700 items-center flex md:hidden">
                        <FaGithub className="mr-2" /> GitHub
                    </a>
                </li>
            </ul>
        </section>
    )
}
