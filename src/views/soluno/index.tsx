import { FC } from "react"
import { FetchRandomNft } from "../../components/FetchRandomNft"
import SolunoGame  from "../../components/SolunoGame"
import Heading from "components/Heading"


export const SolUnoView: FC = ({ }) => {
    return (
       
        <div className="md:hero mx-auto p-4">
          <div className="md:hero-content flex flex-col">
            <h1 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
              Play SolUNO
            </h1>
             {/* <Heading title={"Play SolUNO"} /> */}
            
            {/* CONTENT GOES HERE */}
            <div className="text-center">
              <SolunoGame/>
              <FetchRandomNft />
            </div>
          </div>
        </div>
    )
}
