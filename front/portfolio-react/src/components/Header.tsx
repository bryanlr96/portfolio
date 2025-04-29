

export default function Header() {
  return (
    <header className="sticky top-0 left-0 bg-[#4f33ff] w-full h-[10vh] flex flex-row items-center">
      <ul className="flex flex-row gap-10 w-[80%] mx-auto justify-end">
        <li>
          <a className="uppercase text-white font-bold text-2xl" href="">sobre mi</a>
        </li>
        <li>
          <a className="uppercase text-white font-bold text-2xl" href="">projectos</a>
        </li>
        <li>
          <a className="uppercase text-white font-bold text-2xl" href="">contacto</a>
        </li>
      </ul>
    </header>
  )
}
