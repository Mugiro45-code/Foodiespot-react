import React from "react";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import vegetables from "../Assets/vegetables.jpeg";
import breakfast from "../Assets/Breakfast.jpg";
import donut from "../Assets/Donut.jpeg";
import homeIcon from "../Assets/samosa.jpg"; // <-- Add a home image to your Assets folder

const NAV_LINKS = [
  { path: "/", label: "Home", icon: homeIcon },
  { path: "/healthy", label: "Healthy", icon: vegetables },
  { path: "/breakfast", label: "Breakfast", icon: breakfast },
  { path: "/desserts", label: "Desserts", icon: donut },
];

function Navbar({ cart }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Filter out the current page, replace it with Home if not already on Home
  const links = NAV_LINKS.filter(
    (l) =>
      (l.path !== currentPath && l.path !== "/") ||
      (currentPath !== "/" && l.path === "/")
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Foodiespot
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((l) => (
              <li className="nav-item" key={l.path}>
                <Link className="nav-link" to={l.path}>
                  {l.icon && (
                    <img
                      src={l.icon}
                      alt={l.label}
                      style={{
                        height: 24,
                        width: 24,
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginRight: 6,
                      }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/cart" className="btn btn-outline-primary position-relative ms-3">
            <ShoppingCartIcon />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;