import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/CartPage.jsx";
import Checkout from "./pages/CheckoutPage.jsx";
import OrderSuccess from "./pages/OrderSuccessPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/products/" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
