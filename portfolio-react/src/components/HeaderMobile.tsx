import { Dispatch } from "react"

type HeaderMobileProps = {
    headerMobileVisible: boolean,
    setHeaderMobileVisible: Dispatch<React.SetStateAction<boolean>>
}

export default function HeaderMobile({headerMobileVisible, setHeaderMobileVisible} : HeaderMobileProps) {
  return (
    <div className={headerMobileVisible ? "md:hidden w-screen h-screen bg-black flex flex-col absolute top-0 left-0 z-50" : "hidden"}>

        <div onClick={()=>{setHeaderMobileVisible(false)}}></div>
    </div>
  )
}
