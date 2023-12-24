import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { BrowserRouter } from 'react-router-dom'
import Author from './Pages/Author'
import National from './Pages/National'
import ScrollToTop from './Component/ScrollToTop'


function App() {
  return (

    <div>
      <BrowserRouter>
        <Header />
        <Footer />
        <ScrollToTop/>
      </BrowserRouter>,


    </div>
  )
}

export default App
