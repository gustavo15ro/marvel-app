import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import HeroDetails from '../Pages/HeroDetails'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import GlobalStyle from "../Styles/global"

const App = () => {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="heroDetails/:id" element={<HeroDetails />}/>
      </Routes>
      <Footer />
    </BrowserRouter>


  )
}

export default App
