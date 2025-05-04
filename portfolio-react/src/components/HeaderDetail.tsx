import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function HeaderDetail() {
  return (
    <header className="sticky top-0 left-0 bg-blue-500 w-full h-[10vh] flex text-2xl uppercase text-white font-bold">
      <div className="w-[80%] h-full flex items-center mx-auto" >
        <Link to={'/'} className="flex items-center gap-4w">
          <FiArrowLeft className="text-3xl font-bold" />
          Volver
        </Link>
      </div>
    </header>
  )
}
