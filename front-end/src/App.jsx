
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Advantages from './pages/Advantages'
import Hero from './pages/Hero'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/Register'


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={ 
          <><Hero />
            <Home  /> 
            <Advantages /> 
          </>  
        } />

        <Route path='/home' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>

      
      
      <Footer />
    </BrowserRouter> 

  )
}

export default App
