import useGlobal from "../hooks/useGlobal"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
    const { state } = useGlobal()
    const user = state
    return (
        <section className="w-full h-[80vh] bg-black text-white flex flex-col items-center border-b-6 border-b-blue-500">
            <h2 className="text-4xl uppercase py-[10vh]"> contacto</h2>
            <h3 className="text-3xl text-center">¿Quieres ponerte en contacto conmigo y no sabes cómo? <br /> Aquí tienes algunas opciones:</h3>

            <ul className="grid grid-cols-2 w-[60%] mx-auto mt-[10vh] text-xl gap-5">
                <li className="flex items-center">
                    <a href={`mailto:${user.user?.email}`} className="text-blue-500 hover:text-blue-700 flex items-center">
                        <FaEnvelope className="mr-2" /> {user.user?.email}
                    </a>
                </li>
                <li className="flex items-center ">
                    <a href={user.user?.linkedin} className="text-blue-500 hover:text-blue-700 flex items-center">
                        <FaLinkedin className="mr-2" /> {user.user?.linkedin}
                    </a>
                </li>
                <li className="flex items-center ">
                    <a href={`tel:+34${user.user?.phone}`} className="text-blue-500 hover:text-blue-700 flex items-center">
                        <FaPhone className="mr-2" /> +34 {user.user?.phone}
                    </a>
                </li>
                <li className="flex items-center">
                    <a href={user.user?.github} className="text-blue-500 hover:text-blue-700 flex items-center">
                        <FaGithub className="mr-2" /> {user.user?.github}
                    </a>
                </li>
            </ul>
        </section>
    )
}
