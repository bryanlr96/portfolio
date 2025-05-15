import useGlobal from "../hooks/useGlobal"
import { urlFor } from "../utils/sanityClient"
export default function AboutMe() {

  const { state } = useGlobal()
  const { user } = state

  return (
    <section
      className="w-full min-h-[70vh] bg-cover bg-center bg-no-repeat scroll-mt-30"
      style={{
        backgroundImage: user?.banner ? `url(${urlFor(user.banner).url()})` : "none",
      }}
      id="about"
    >
      <div className="w-full min-h-[70vh] bg-black/85">
        <div className="w-[80%] min-h-[70vh] mx-auto flex flex-col lg:flex-row items-center text-white justify-center gap-10 lg:justify-between">
          {user && (
            <>
              <img
                className="w-[30vh] lg:w-[45vh] aspect-square rounded-full object-cover"
                src={urlFor(user.image).url()}
                alt="imagen del usuario"
              />
              <div className="lg:h-[45vh] w-[90%] lg:w-[50%] text-center flex flex-col lg:justify-evenly gap-5">
                <h1 className="text-4xl lg:text-5xl">{user.name}</h1>
                <h2 className="text-3xl lg:text-4xl uppercase">{user.title}</h2>
                <p className="hidden md:block text-lg">{user.description}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
