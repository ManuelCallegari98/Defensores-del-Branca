import Navigation from "./components/Navigation"
import { Routes, Route} from 'react-router-dom'
import  Home  from "./components/Home"
import  Shop  from "./components/Shop"
import  Team  from "./components/Team"
import  About  from "./components/About"
import DetallesProducto from "./components/DetallesProducto"
import { CartProvider } from "./context/cart"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Home /> } exact />
        <Route path='/Team' element={ <Team /> } exact />
        <Route path='/About' element={ <About /> } exact />

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
      </Routes>
    </>
  )
}

export default App
