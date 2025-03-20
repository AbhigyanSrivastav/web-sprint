import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ProductsLand from './components/ProductsLand'
import AllProducts from './components/AllProducts'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      < NavBar />
      < ProductsLand />
      < AllProducts />
      < Footer />
    </div>
  )
}

export default App
