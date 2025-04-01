import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Devices from "./components/Devices"
import Specification from "./components/Specification"
import Reviews from "./components/Reviews"


function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Banner/>
      <Devices/>
      <Specification/>
      <Reviews/>
    </div>
  )
}

export default App
