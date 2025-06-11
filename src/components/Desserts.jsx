import React from "react";
import { Link } from "react-router-dom";
import donut from "../Assets/Donut.jpeg";
import iceCreamBowl from "../Assets/ice cream bowl.jpg";
import iceCreamCone from "../Assets/ice cream cone.jpg";
import iceCreamBrownie from "../Assets/Icecream Brownie.jpg";
import oreoMilkshake from "../Assets/Oreo Milkshake.jpg";
import pancakesSet from "../Assets/Pancakes set.jpg";
import cakeSlice from "../Assets/Single cake piece.jpg";
import strawberryCake from "../Assets/Strawbery Cake.jpg";
import chocolateShake from "../Assets/Chocolate shake.jpg";

const desserts = [
  {
    img: donut,
    title: "Donut Delights",
    desc: "Soft, sweet donuts glazed and sprinkled for a perfect treat.",
    price: 80,
  },
  {
    img: iceCreamBowl,
    title: "Ice Cream Bowl",
    desc: "Creamy vanilla and chocolate scoops with toppings.",
    price: 150,
  },
  {
    img: iceCreamCone,
    title: "Ice Cream Cone",
    desc: "Crispy cone filled with creamy ice cream swirls.",
    price: 100,
  },
  {
    img: iceCreamBrownie,
    title: "Ice Cream Brownie",
    desc: "Warm brownie topped with vanilla ice cream and chocolate sauce.",
    price: 120,
  },
  {
    img: oreoMilkshake,
    title: "Oreo Milkshake",
    desc: "Chilled milkshake blended with Oreo cookies and cream.",
    price: 110,
  },
  {
    img: pancakesSet,
    title: "Pancakes Set",
    desc: "Fluffy pancakes stacked with honey and fresh berries.",
    price: 140,
  },
  {
    img: cakeSlice,
    title: "Cake Slice",
    desc: "Moist and rich slice of cake with creamy frosting.",
    price: 70,
  },
  {
    img: strawberryCake,
    title: "Strawberry Cake",
    desc: "Soft sponge cake layered with fresh strawberries and cream.",
    price: 130,
  },
  {
    img: chocolateShake,
    title: "Chocolate Shake",
    desc: "Thick and creamy chocolate shake topped with choco chips.",
    price: 90,
  },
];

const Desserts = () => (
  <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Foodiespot</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/healthy">Healthy</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/breakfast">Breakfast</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/desserts">Desserts</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="text-white text-center py-5" style={{ background: "#e83e8c" }}>
      <div className="container">
        <h1>Desserts</h1>
        <p className="lead">Indulge in our sweetest and most delightful desserts!</p>
      </div>
    </section>

    {/* Desserts Food Gallery */}
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {desserts.map((item, idx) => (
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

export default Desserts;