import Navigation from "./components/Navigation"
import { Routes, Route } from 'react-router-dom'
import  Home  from "./components/Home"
import  Shop  from "./components/Shop"
import  Team  from "./components/Team"
import  History  from "./components/History"
import DetallesProducto from "./components/DetallesProducto"
import { CartProvider } from "./context/cart"
import Login from "./components/Login"
import { Error } from "./components/Error"
import Profile from "./components/Profile"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Home /> } exact />
        <Route path='/team' element={ <Team /> } exact />
        <Route path='/history' element={ <History /> } exact />

          <Route path='/shop' element={
             <CartProvider>
               <Shop /> 
             </CartProvider>
            } exact />
          <Route path="/producto/:id" element= {
            <CartProvider>
              <DetallesProducto />
            </CartProvider>
          } exact />
        <Route path='/login' element={ <Login /> } exact />
        <Route path='/profile' element={ <Profile /> } exact />
        <Route path='*' element={ <Error /> } exact />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
