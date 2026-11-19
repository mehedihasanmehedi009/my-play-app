import { use } from "react"
import Availaableplayer from "../Availableplayer/Availaableplayer"
export const Cardsection = ({ cadrdata }) => {
    const cardData = use(cadrdata)
    const CardData = cardData.data
    console.log(CardData)
    return (
        <>
         <div> <h1>mehedi</h1></div>
            <div className="max-w-[1120px] mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               
                {
                    CardData.map((CADR, index) =><Availaableplayer key={index} CADR={CADR}></Availaableplayer>)
                }
            </div>
        </>
    )
}




