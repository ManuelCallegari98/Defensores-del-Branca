import Navigation from "./components/Navigation"
import { Routes, Route } from 'react-router-dom'
import  Home  from "./components/Home"
import  Shop  from "./components/Shop"
import  Team  from "./components/Team"
import  About  from "./components/About"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/Home' element={ <Home /> } exact />
        <Route path='/Shop' element={ <Shop /> } exact />
        <Route path='/Team' element={ <Team /> } exact />
        <Route path='/About' element={ <About /> } exact />
      </Routes>
    </>
  )
}

export default App
