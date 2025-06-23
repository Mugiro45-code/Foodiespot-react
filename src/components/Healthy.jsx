// Example: src/components/Healthy.jsx
import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import vegetables from "../Assets/vegetables.jpeg";
import salad from "../Assets/Salad.jpeg";
import meal from "../Assets/meal.jpg";
import rainbowSalad from "../Assets/healthy salad.jpg";
import eggSandwich from "../Assets/Egg Sandwitch.jpg";
import avocadoBowl from "../Assets/Avocado.jpg";
import fruitSalad from "../Assets/Fruit Salad.jpg";
import eggSalad from "../Assets/Egg Salad.jpg";
import fruits from "../Assets/Fruits.jpg";
import Navbar from "./Navbar";

const healthyFoods = [
  {
    img: vegetables,
    title: "Fresh Vegetables",
    desc: "Organic and healthy veggies for every meal.",
    price: 120,
  },
  {
    img: salad,
    title: "Classic Salad",
    desc: "Crisp greens with a light, healthy dressing.",
    price: 150,
  },
  {
    img: meal,
    title: "Wholesome Meal",
    desc: "Balanced meal with grains, veggies, and protein.",
    price: 250,
  },
  {
    img: rainbowSalad,
    title: "Rainbow Salad",
    desc: "A vibrant mix of fresh, colorful vegetables.",
    price: 130,
  },
  {
    img: eggSandwich,
    title: "Egg Sandwich",
    desc: "Protein-packed sandwich with fresh veggies.",
    price: 140,
  },
  {
    img: avocadoBowl,
    title: "Avocado Power Bowl",
    desc: "Creamy avocado with a medley of superfoods.",
    price: 160,
  },
  {
    img: fruitSalad,
    title: "Fruit Salad",
    desc: "Refreshing mix of seasonal fruits.",
    price: 110,
  },
  {
    img: eggSalad,
    title: "Egg Salad",
    desc: "Classic egg salad with a healthy twist.",
    price: 100,
  },
  {
    img: fruits,
    title: "Fresh Fruit Platter",
    desc: "A platter of juicy, handpicked fruits.",
    price: 170,
  },
];

const Healthy = ({ addToCart, cart, increaseQty, decreaseQty }) => (
  <div>
    <Navbar cart={cart} />
    {/* Hero Section */}
    <section className="bg-success text-white text-center py-5">
      <div className="container pt-2">
        <h1>Healthy Foods</h1>
        <p className="lead">Discover our range of nutritious and delicious healthy meals!</p>
      </div>
    </section>

    {/* Healthy Food Gallery */}
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {healthyFoods.map((item, idx) => {
          const qty = cart.find((c) => c.title === item.title)?.quantity || 0;

          return (
            <div className="col" key={idx}>
              <div className="card food-card h-100">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold text-primary">₹{item.price}</span>
                    {qty === 0 ? (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => decreaseQty(item.title)}
                        >
                          <RemoveIcon />
                        </button>
                        <span className="mx-2">{qty}</span>
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => increaseQty(item.title)}
                        >
                          <AddIcon />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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

export default Healthy;