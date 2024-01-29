import { Routes, Route } from "react-router-dom"
import Default from "./pages/Default"
import RegisterPage from "./pages/RegisterPage"
import LogInPage from './pages/LogInPage'
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Default /> } />
        <Route path="/home" element={ <HomePage/> } />
        <Route path="/profile" element={ <ProfilePage/> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/login" element={ <LogInPage/> } />
      </Routes>
    </div>
  )
}

export default App