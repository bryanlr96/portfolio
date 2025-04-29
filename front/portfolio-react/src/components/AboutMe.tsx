import useGlobal from "../hooks/useGlobal"
import { urlFor } from "../utils/sanityClient"
export default function AboutMe() {

  const { state } = useGlobal()
  const { user } = state

  return (
    <section className="w-full h-[70vh] bg-[url('/hero.jpg')] bg-cover bg-center">
      <div className="w-full h-full bg-black/85">
        <div className="w-[80%] h-full mx-auto flex items-center text-white justify-between">
          {user && (
            <>
              <img
                className="w-[45vh] aspect-square rounded-full object-cover"
                src={urlFor(user.image).url()}
                alt="imagen del usuario"
              />
              <div className="h-[45vh] w-[50%] text-center flex flex-col justify-evenly">
                <h1 className="text-5xl">{user.name}</h1>
                <h2 className="text-4xl uppercase">{user.title}</h2>
                <p className="text-lg">{user.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
