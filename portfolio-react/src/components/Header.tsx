

export default function Header() {
  return (
    <header className="sticky top-0 left-0 bg-blue-500 w-full h-[10vh] hidden md:flex flex-row items-center md:text-2xl uppercase text-white font-bold">
      <ul className="flex  gap-10 w-[80%] mx-auto justify-evenly lg:justify-end items-center">
        <li>
          <a href="#about" className="hover:underline">sobre mi</a>
        </li>
        <li>
          <a href="#projects"  className="hover:underline">projectos</a>
        </li>
        <li>
          <a href="#contact"  className="hover:underline">contacto</a>
        </li>
      </ul>
    </header>
  )
}
