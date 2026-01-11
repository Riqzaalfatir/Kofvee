import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Home from './pages/Home'
import Footer from './component/Footer'
import Detail from './pages/Detail'
import Checkout from './pages/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/detail/:id" element={<Detail />} />
           <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
