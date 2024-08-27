import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Todo from "./Pages/Todo";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([])
  useEffect(() => {
    const listItems = JSON.parse(localStorage.getItem("list"))
    if (listItems) {
      setList(listItems)
    }
  },[])
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/todo" element={<Todo list={list} setList={setList}></Todo>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
