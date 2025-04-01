import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Devices from "./components/Devices"
import Specification from "./components/Specification"


function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Banner/>
      <Devices/>
      <Specification/>
    </div>
  )
}

export default App
