import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./assets/Header";
import ProductsDisplay from "./assets/ProductsDisplay";
import CartItems from "./assets/Cartitems";  // <-- file name is Cartitems.jsx

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<ProductsDisplay />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
