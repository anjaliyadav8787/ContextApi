
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Cart from './pages/Cart'

function App() {
  

  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
  

   </>
  )
}

export default App
