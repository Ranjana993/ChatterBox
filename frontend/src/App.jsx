import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {Routes , Route } from "react-router-dom"


export default function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </div>
  )
}