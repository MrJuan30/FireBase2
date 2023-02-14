import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Auth } from './components/auth'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
      </Routes>
    </>
  )
}

export default App
