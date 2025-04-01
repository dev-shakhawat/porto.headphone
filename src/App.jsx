import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Devices from "./components/Devices"


function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Banner/>
      <Devices/>
    </div>
  )
}

export default App
