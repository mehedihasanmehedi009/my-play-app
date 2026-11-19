
import { Suspense } from 'react'
import './App.css'
import { Banner } from './Component/Banner/Banner'
import { Header } from './Component/Header/Header'
import { Loding } from './Component/Loding/Loding'
import axios from 'axios'
import { Cardsection } from './Component/card/Cardsection'
import { Footer } from './Component/Footer/Footer'

const cadrdata = axios.get("player.json")
console.log(cadrdata)

function App() {
  return (
   <>
  <div className='bg-base-200'>
     <Header/>
   <Banner/>
   <Suspense fallback={<Loding/>}>
    <Cardsection cadrdata={cadrdata}></Cardsection>
   </Suspense>
   <Footer/>
  </div>
   </>
  )
}

export default App
