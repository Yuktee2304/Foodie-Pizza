import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import { OrderPage } from "./Pages/OrderPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/orders" element={<OrderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
