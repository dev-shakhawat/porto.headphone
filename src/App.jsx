import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Devices from "./components/Devices"
import Specification from "./components/Specification"
import Reviews from "./components/Reviews"
import ViewProduct from "./components/ViewProduct"
import Explore from "./components/Explore"
import PaySupReturn from "./components/PaySupReturn"
import Newsletter from "./components/Newsletter"


function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Banner/>
      <Devices/>
      <Specification/>
      <Reviews/>
      <ViewProduct/>
      <Explore/>
      <PaySupReturn/>
      <Newsletter/>
    </div>
  )
}

export default App
