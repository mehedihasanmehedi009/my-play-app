
import { Suspense, useState } from 'react'
import './App.css'
import { Banner } from './Component/Banner/Banner'
import { Header } from './Component/Header/Header'
import { Loding } from './Component/Loding/Loding'
import axios from 'axios'
import { Cardsection } from './Component/Availableplayer/Cardsection'
import { Footer } from './Component/Footer/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cadrdata = axios.get("player.json")
console.log(cadrdata)

function App() {
  const [coin, setCoin] =useState(5000000)
  return (
   <>
  <div className='bg-base-200'>
     <Header coin={coin}  />
   <Banner/>
   <Suspense fallback={<Loding/>}>
    <Cardsection cadrdata={cadrdata}
      setCoin={setCoin}
      coin={coin}
    ></Cardsection>
   </Suspense>
   <Footer/>
  </div>
  <ToastContainer position="top-right" autoClose={2000} theme="dark" />
   </>
  )
}

export default App
