import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Home"
import HeroDetails from "./HeroDetails"
export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="heroDetails" element={<HeroDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}
