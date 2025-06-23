import React from "react";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function OrderSummary({ cart, total }) {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <div className="text-center mb-4">
          <CheckCircleOutlineIcon style={{ fontSize: 60, color: "#28a745" }} />
          <h2 className="text-success mt-2">Thank You for Your Order!</h2>
          <p className="lead">Your order has been placed successfully.</p>
        </div>
        <h4 className="mb-3">
          <ShoppingCartIcon className="me-2" />
          Order Summary
        </h4>
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
                  width: 50,
                  height: 50,
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
                <span className="text-muted">
                  ₹{item.price} x {item.quantity}
                </span>
              </div>
              <span
                className="fw-semibold text-success ms-3"
                style={{ minWidth: 60, textAlign: "right" }}
              >
                ₹{item.price * item.quantity}
              </span>
            </li>
          ))}
        </ul>
        <h4 className="mb-4">
          Total Paid: <span className="text-success">₹{total}</span>
        </h4>
        <div className="text-center">
          <Link to="/" className="btn btn-primary mt-2">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;