import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Todo from "./Pages/Todo"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"


const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home> } />
        <Route path="/login" element={<Login></Login> } />
        <Route path="/register" element={<Register></Register> } />
        <Route path="/todo" element={<Todo></Todo> } />
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App