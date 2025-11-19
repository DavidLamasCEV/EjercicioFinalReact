import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

function Items(){
  return (
    <div>
      <h1>Items</h1>
      <p>Aquí están los items.</p>
    </div>
  )  
}

function Profile(){
  return (
    <div>
      <h1>Perfil</h1>
      <p>Datos del usuario</p>
    </div>
  )  
}

function Contact(){
  return (
    <div>
      <h1>Contacto</h1>
      <p>Formulario para contactar</p>
    </div>
  )  
}

function AboutUs(){
  return (
    <div>
      <h1>About</h1>
      <p>Página con info estática</p>
    </div>
  )  
}

export default App
