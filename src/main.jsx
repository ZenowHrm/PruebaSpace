import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

const root = document.getElementById("root")

// Componentes
import { Principal } from './principal'

function App() {
  let app = <BrowserRouter >
  <Routes >
    <Route path='/' element={<><h1>Hola</h1> <Link to="/home">Link</Link></>} />
    <Route path='/home' element={<><Principal /> <Link to="/">Link</Link></>} />
  </Routes>
  </BrowserRouter>

  return app
}

createRoot(root).render(<App />)
