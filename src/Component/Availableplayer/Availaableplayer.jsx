import { useState } from "react";
import { toast } from "react-toastify";

const 
Availaableplayer = ({CADR , setCoin,coin,selectedPlayer ,setSelectedPlayer}) => {
    const [players, setPlayers] =useState(false)   
  const {
      name,
    country,
    role,
    rating,
    battingStyle,
    bowlingStyle,
    price,
    image,
  } = CADR;
  const choosePlayer = ()=>{
    let newCoin = coin - price
  if (newCoin >= 0) {
    setCoin(coin - price);
    toast.success(`${name} added to your squad!`, {
      position: "top-right",
      autoClose: 2000,
    });
  } else {
    toast.error("Not enough coin! Claim more credit to buy this player.", {
      position: "top-right",
      autoClose: 2500,
    });
     return
  }
  setPlayers(true)
  setSelectedPlayer([...selectedPlayer,CADR])
  }

  return (
    <div>
<div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <img
          src={image}
          alt={name}
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80";
          }}
          className="w-full h-52 object-cover rounded-xl mb-4"
        />

        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 pb-3 border-b border-gray-100">
          <span className="font-medium">🏳️ {country}</span>
          <span className="px-3 py-1 rounded-lg bg-gray-100 text-gray-800 font-medium">
            {role}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm mt-3">
          <span className="font-semibold text-gray-700">Rating</span>
          <span className="font-bold text-amber-600">⭐ {rating}</span>
        </div>

        <div className="flex items-center justify-between text-sm mt-2">
          <span className="font-semibold text-gray-700">Batting</span>
          <span className="text-gray-600">{battingStyle}</span>
        </div>

        <div className="flex items-center justify-between text-sm mt-2 pb-3 border-b border-gray-100">
          <span className="font-semibold text-gray-700">Bowling</span>
          <span className="text-gray-600">{bowlingStyle}</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-1">
        <p className="text-sm font-bold text-gray-900">
          Price: {price} Coin
        </p>

        <button
          onClick={choosePlayer} disabled ={players ? true: false}
          className="px-3.5 py-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 border-gray-300 hover:bg-[#E7FE29] hover:border-[#E7FE29] text-sm font-semibold text-gray-800 hover:text-black transition-colors cursor-pointer"
        >
          {players === true ? "Selected" :" Choose Player"}
        </button>
      </div>
    </div>
    </div>
  )
};

export default Availaableplayer;