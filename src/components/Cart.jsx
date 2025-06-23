import React from "react";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cart({ cart, increaseQty, decreaseQty, removeItem, handleCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-primary">
          <ShoppingCartIcon fontSize="large" /> Your Cart
        </h2>
        {cart.length === 0 ? (
          <div className="alert alert-info">Your cart is empty.</div>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex align-items-center"
                  style={{ borderRadius: "8px", marginBottom: "8px" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginRight: 16,
                    }}
                  />
                  <div className="flex-grow-1">
                    <span className="fw-bold">{item.title}</span>
                    <div className="text-muted" style={{ fontSize: 14 }}>
                      {item.desc}
                    </div>
                    <span className="text-muted">₹{item.price}</span>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ minWidth: 110 }}
                  >
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => decreaseQty(item.title)}
                      style={{ width: 32 }}
                    >
                      <RemoveIcon />
                    </button>
                    <span
                      className="mx-2"
                      style={{
                        minWidth: 24,
                        textAlign: "center",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => increaseQty(item.title)}
                      style={{ width: 32 }}
                    >
                      <AddIcon />
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => removeItem(item.title)}
                      title="Remove item"
                    >
                      <RemoveShoppingCartIcon />
                    </button>
                  </div>
                  <span
                    className="fw-semibold text-success ms-3"
                    style={{
                      minWidth: 60,
                      textAlign: "right",
                    }}
                  >
                    ₹{item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">
                Total: <span className="text-success">₹{total}</span>
              </h4>
              <button
                className="btn btn-success btn-lg"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        )}
        {/* Return to Home Button */}
        <div className="text-center mt-4">
          <Link to="/" className="btn btn-secondary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;