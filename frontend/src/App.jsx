import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {Routes , Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./context/authContext";


export default function App() {
  const {authUser} = useAuthContext()
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />}/>
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register />} />
      </Routes>
      
    </div>
  )
}