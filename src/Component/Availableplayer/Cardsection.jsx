import { use, useState } from "react"
import Availaableplayer from "./Availaableplayer"
import { SelectedPlayer } from "../Selectedplayer/SelectedPlayer"
export const Cardsection = ({ cadrdata ,setCoin ,coin }) => {
    const cardData = use(cadrdata)
    const CardData = cardData.data


    const [selectedType, setSelectedType] = useState("Available")
    const [selectedPlayer, setSelectedPlayer] = useState([])


    return (
        <>
            <div className="max-w-[1120px] mx-auto px-4 py-8 ">
                <div className=" p-4 flex justify-between gap-4 items-center">
                    {selectedType === "Available" ? (
                        <h1 className="font-bold text-xl">Available Players</h1>
                    ) : (
                        <h1 className="font-bold text-xl">
                            Selected Players({selectedPlayer.length}/11)
                        </h1>
                    )}
                    <div className="">
                        <button onClick={() => setSelectedType("Available")} className={`btn ${selectedType === "Available" ? "bg-[#E7FE29]" : "bg-white"}    rounded-l-2xl rounded-r-none`}>Available </button>
                        <button onClick={() => setSelectedType("Selected")} className={`btn ${selectedType === "Selected" ? "bg-[#E7FE29]" : "bg-white"}  rounded-r-2xl rounded-l-none`}>Selected <span>({selectedPlayer.length})</span></button>
                    </div>
                </div>

                {selectedType === "Available" ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CardData.map((CADR, index) => (
                            <Availaableplayer key={CADR.id ?? index} CADR={CADR} setCoin={setCoin} coin={coin}  setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} />
                        ))}
                    </div>
                ) : (
                    <SelectedPlayer  selectedPlayer={selectedPlayer} />
                )}

            </div>
        </>
    )
}




