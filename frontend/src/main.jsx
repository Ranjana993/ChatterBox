import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/authContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider> 
    <App />
    </AuthContextProvider>
    <Toaster />
  </BrowserRouter>,
)
