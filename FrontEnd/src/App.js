import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppContext from "./context/AppContext";
import AddProduct from "./pages/add";
import EditProduct from "./pages/edit";
import DetailProduct from "./pages/detail";
import HomePage from "./pages/list";

function App() {
  return (
    <AppContext.Provider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/product/:id" element={<EditProduct />}></Route>
        <Route path="/detail/:id" element={<DetailProduct />}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
