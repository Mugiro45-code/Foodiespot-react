import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Healthy from "./components/Healthy";
import Breakfast from "./components/Breakfast";
import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [lastOrder, setLastOrder] = useState({ cart: [], total: 0 });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.title === item.title);
      if (found) {
        return prev.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQty = (title) => {
    setCart((prev) =>
      prev.map((i) =>
        i.title === title ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQty = (title) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.title === title ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (title) => {
    setCart((prev) => prev.filter((item) => item.title !== title));
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setLastOrder({ cart: [...cart], total });
    setCart([]); // Clear cart after saving order
    navigate("/order-summary");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            addToCart={addToCart}
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        }
      />
      <Route
        path="/healthy"
        element={
          <Healthy
            addToCart={addToCart}
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        }
      />
      <Route
        path="/breakfast"
        element={
          <Breakfast
            addToCart={addToCart}
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        }
      />
      <Route
        path="/desserts"
        element={
          <Desserts
            addToCart={addToCart}
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeItem={removeItem}
            handleCheckout={handleCheckout}
          />
        }
      />
      <Route
        path="/order-summary"
        element={<OrderSummary cart={lastOrder.cart} total={lastOrder.total} />}
      />
    </Routes>
  );
}

export default App;
