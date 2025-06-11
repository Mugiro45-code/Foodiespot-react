import React from "react";
import { Link } from "react-router-dom";
import vegetables from "../Assets/vegetables.jpeg";
import breakfast from "../Assets/Breakfast.jpg";
import donut from "../Assets/Donut.jpeg";
import burger from "../Assets/Burger.jpeg";
import chicken from "../Assets/chicken.jpg";
import dinner from "../Assets/dinner.jpg";
import meal from "../Assets/meal.jpg";
import noodle from "../Assets/noodle.jpeg";
import pizza from "../Assets/pizza.jpeg";
import salad from "../Assets/Salad.jpeg";
import iceCreamBowl from "../Assets/ice cream bowl.jpg";
import iceCreamCone from "../Assets/ice cream cone.jpg";
import breadRoast from "../Assets/bread roast.jpg";
import fishFry from "../Assets/fish fry.jpg";
import wings from "../Assets/wings.jpeg";
import samosa from "../Assets/samosa.jpg";
import momos from "../Assets/momos.jpg";
import friedChicken from "../Assets/fried chicken.jpg";

const foodCards = [
  {
    img: vegetables,
    title: "Fresh Vegetables",
    desc: "Organic and healthy veggies for every meal.",
    badge: { text: "Healthy", className: "bg-success" },
    price: 120,
  },
  {
    img: breakfast,
    title: "Breakfast Specials",
    desc: "Start your day with our delicious breakfast combos.",
    badge: { text: "Morning Favorite", className: "bg-warning text-dark" },
    price: 150,
  },
  {
    img: burger,
    title: "Classic Burger",
    desc: "Juicy burgers with fresh ingredients.",
    badge: { text: "Popular", className: "bg-danger" },
    price: 200,
  },
  {
    img: chicken,
    title: "Chicken Feast",
    desc: "Tender and flavorful chicken dishes.",
    price: 250,
  },
  {
    img: dinner,
    title: "Dinner Platter",
    desc: "Sumptuous dinner sets for the whole family.",
    price: 300,
  },
  {
    img: donut,
    title: "Donut Delights",
    desc: "Sweet and colorful donuts for your cravings.",
    badge: { text: "Dessert", style: { background: "#e83e8c" } },
    price: 80,
  },
  {
    img: meal,
    title: "Healthy Meal",
    desc: "Balanced meals for a healthy lifestyle.",
    price: 220,
  },
  {
    img: noodle,
    title: "Noodle Bowl",
    desc: "Slurp-worthy noodles with rich flavors.",
    price: 180,
  },
  {
    img: pizza,
    title: "Cheesy Pizza",
    desc: "Hot and cheesy pizzas with fresh toppings.",
    price: 250,
  },
  {
    img: salad,
    title: "Fresh Salad",
    desc: "Crisp salads with a variety of dressings.",
    badge: { text: "Vegan", className: "bg-success" },
    price: 100,
  },
  {
    img: iceCreamBowl,
    title: "Ice Cream Bowl",
    desc: "Creamy ice cream with your favorite toppings.",
    badge: { text: "Cool Treat", className: "bg-info text-dark" },
    price: 90,
  },
  {
    img: iceCreamCone,
    title: "Ice Cream Cone",
    desc: "Classic cones with a modern twist.",
    price: 70,
  },
  {
    img: breadRoast,
    title: "Bread Roast",
    desc: "Toasted bread with savory fillings.",
    price: 110,
  },
  {
    img: fishFry,
    title: "Fish Fry",
    desc: "Crispy and spicy fried fish.",
    price: 230,
  },
  {
    img: wings,
    title: "Chicken Wings",
    desc: "Juicy wings with a variety of sauces.",
    price: 240,
  },
  {
    img: samosa,
    title: "Samosa",
    desc: "Crispy samosas with spicy filling.",
    price: 60,
  },
  {
    img: momos,
    title: "Momos",
    desc: "Steamed dumplings with delicious stuffing.",
    price: 130,
  },
  {
    img: noodle,
    title: "Noodle Special",
    desc: "A special bowl of noodles for every mood.",
    price: 190,
  },
  {
    img: chicken,
    title: "Chicken Special",
    desc: "Our chef's favorite chicken recipe.",
    price: 260,
  },
  {
    img: friedChicken,
    title: "Fried Chicken",
    desc: "Crispy fried chicken, golden and juicy.",
    badge: { text: "Special", className: "bg-primary" },
    price: 270,
  },
];

const Home = () => (
  <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Foodiespot</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/healthy">
                <img src={vegetables} alt="Healthy" style={{height:24,width:24,objectFit:"cover",borderRadius:"50%",marginRight:6}} />
                Healthy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/breakfast">
                <img src={breakfast} alt="Breakfast" style={{height:24,width:24,objectFit:"cover",borderRadius:"50%",marginRight:6}} />
                Breakfast
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/desserts">
                <img src={donut} alt="Desserts" style={{height:24,width:24,objectFit:"cover",borderRadius:"50%",marginRight:6}} />
                Desserts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1>Welcome to Foodiespot</h1>
        <p className="lead">
          Explore our mouth-watering gallery of dishes, handpicked from our chef's favorites and customer bestsellers!
        </p>
      </div>
    </section>

    {/* Carousel */}
    <div id="innovationCarousel" className="carousel slide my-5" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#innovationCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#innovationCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#innovationCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner rounded shadow">
        <div className="carousel-item active">
          <img src={donut} className="d-block w-100" style={{height:350,objectFit:"cover"}} alt="Dessert Innovation" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>AI-Powered Dessert Recommendations</h5>
            <p>Let our smart system suggest the perfect sweet treat for your mood!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={vegetables} className="d-block w-100" style={{height:350,objectFit:"cover"}} alt="Healthy Innovation" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Personalized Healthy Meal Plans</h5>
            <p>Get daily meal plans tailored to your health goals and preferences.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={breakfast} className="d-block w-100" style={{height:350,objectFit:"cover"}} alt="Breakfast Innovation" />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>Order Breakfast Before You Wake Up</h5>
            <p>Schedule your favorite breakfast to arrive fresh as you start your day!</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#innovationCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#innovationCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* Food Gallery */}
    <div className="container my-5">
      <h2 className="mb-4 text-center">Our Food Gallery</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {foodCards.map((card, idx) => (
          <div className="col" key={idx}>
            <div className="card food-card h-100">
              <img src={card.img} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.desc}</p>
                {card.badge && (
                  <span
                    className={`badge ${card.badge.className || ""}`}
                    style={card.badge.style}
                  >
                    {card.badge.text}
                  </span>
                )}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold text-primary">₹{card.price}</span>
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
        <p className="mb-3" style={{maxWidth:600,margin:"auto"}}>
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
    {/* Extra styles for food-card images */}
    <style>
      {`
        .food-card img { height: 180px; object-fit: cover; }
        .navbar-brand { font-weight: bold; }
      `}
    </style>
  </div>
);

export default Home;