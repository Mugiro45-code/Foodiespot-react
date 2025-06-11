import React from "react";
import { Link } from "react-router-dom";
import breakfast from "../Assets/Breakfast.jpg";
import breadRoast from "../Assets/bread roast.jpg";
import noodle from "../Assets/noodle.jpeg";
import dosaCombo from "../Assets/Dosa combo.jpg";
import heavyCombo from "../Assets/Heavy Breakfast combo.jpg";
import idly from "../Assets/Idly.jpg";
import breadToast from "../Assets/Bread Toast.jpg";
import pancakesSet from "../Assets/Pancakes set.jpg";
import vada from "../Assets/Vada.jpg";

const breakfastItems = [
  {
    img: breakfast,
    title: "Breakfast Platter",
    desc: "A hearty platter with eggs, toast, and fruits to kickstart your morning.",
    price: 160,
  },
  {
    img: breadRoast,
    title: "Bread Roast",
    desc: "Golden roasted bread slices served with chutney and sambar.",
    price: 90,
  },
  {
    img: noodle,
    title: "Noodle Bowl",
    desc: "Hot and spicy noodles with veggies for a quick breakfast.",
    price: 110,
  },
  {
    img: dosaCombo,
    title: "Dosa Combo",
    desc: "Crispy dosa served with sambar, chutney, and potato masala.",
    price: 120,
  },
  {
    img: heavyCombo,
    title: "Heavy Breakfast Combo",
    desc: "A filling combo of idli, vada, dosa, and chutneys.",
    price: 180,
  },
  {
    img: idly,
    title: "Idli",
    desc: "Soft steamed rice cakes, a South Indian breakfast staple.",
    price: 60,
  },
  {
    img: breadToast,
    title: "Bread Toast",
    desc: "Classic bread toast with butter, perfect with tea or coffee.",
    price: 50,
  },
  {
    img: pancakesSet,
    title: "Pancakes Set",
    desc: "Stack of pancakes with honey and fresh fruits.",
    price: 140,
  },
  {
    img: vada,
    title: "Vada",
    desc: "Crispy fried lentil doughnuts, best with chutney and sambar.",
    price: 40,
  },
];

const Breakfast = () => (
  <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Foodiespot</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/healthy">Healthy</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/breakfast">Breakfast</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/desserts">Desserts</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="bg-warning text-dark text-center py-5">
      <div className="container">
        <h1>Breakfast Specials</h1>
        <p className="lead">Start your day right with our delicious breakfast options!</p>
      </div>
    </section>

    {/* Breakfast Food Gallery */}
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {breakfastItems.map((item, idx) => (
          <div className="col" key={idx}>
            <div className="card food-card h-100">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desc}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold text-primary">₹{item.price}</span>
                  <button className="btn btn-sm btn-outline-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <h5 className="mb-2">About Foodiespot</h5>
        <p className="mb-3" style={{ maxWidth: 600, margin: "auto" }}>
          Foodiespot is your gateway to a universe of innovative, delicious, and diverse foods.
          We bring together the best of healthy, breakfast, and dessert options, all curated with passion and quality.
          Whether you crave a nutritious meal, a hearty breakfast, or a sweet treat, Foodiespot is here to serve you with freshness and creativity every day.
        </p>
        <div className="mb-2">
          <strong>Contact us:</strong> support@foodiespot.com | +91 98765 43210
        </div>
        <div>
          Designed with <span role="img" aria-label="love">❤️</span> by MUGILAN S
        </div>
      </div>
    </footer>
    <style>
      {`
        .food-card img { height: 180px; object-fit: cover; }
        .navbar-brand { font-weight: bold; }
      `}
    </style>
  </div>
);

export default Breakfast;