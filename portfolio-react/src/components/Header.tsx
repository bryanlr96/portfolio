

export default function Header() {
  return (
    <header className="sticky top-0 left-0 bg-blue-500 w-full h-[10vh] hidden md:flex flex-row items-center md:text-2xl uppercase text-white font-bold">
      <ul className="flex flex-col md:flex-row gap-5 md:gap-10 w-[80%] mx-auto justify-evenly lg:justify-end items-center">
        <li>
          <a href="#about">sobre mi</a>
        </li>
        <li>
          <a href="#projects">projectos</a>
        </li>
        <li>
          <a href="#contact">contacto</a>
        </li>
      </ul>
    </header>
  )
}
