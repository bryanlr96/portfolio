import { Dispatch } from "react"
import { motion, AnimatePresence } from "framer-motion"

type HeaderMobileProps = {
    headerMobileVisible: boolean,
    setHeaderMobileVisible: Dispatch<React.SetStateAction<boolean>>
}


export default function HeaderMobile({ headerMobileVisible, setHeaderMobileVisible }: HeaderMobileProps) {
    return (
        <AnimatePresence>
            {headerMobileVisible && (
                <motion.div
                    className="md:hidden w-screen h-screen bg-black/80 flex flex-col fixed top-0 left-0 z-50"
                    onClick={() => setHeaderMobileVisible(false)}
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <ul className="w-full bg-blue-500 text-white">
                        {[
                            { href: "#about", label: "sobre mí" },
                            { href: "#projects", label: "proyectos" },
                            { href: "#contact", label: "contacto" },
                        ].map(({ href, label }) => (
                            <li
                                key={href}
                                className="h-[46px] border-b border-b-white flex items-center uppercase w-full"
                                onClick={() => setHeaderMobileVisible(false)}
                            >
                                <a href={href} className="w-full text-center hover:underline">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    )
}