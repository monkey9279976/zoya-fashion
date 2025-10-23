import React, { useState } from "react";
import "./App.css";
import { products } from "./data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="app">
      <header className="hero">
        <img src="/images/hero-banner.jpg" alt="Fashion Hero" className="hero-img" />
        <div className="hero-text">
          <h1>Zoya Fashion</h1>
          <p>Discover your style — elegant, timeless, and confident.</p>
          <a href="#shop" className="shop-btn">Shop Now</a>
        </div>
      </header>

      <section id="shop" className="shop-section">
        <h2>Shop Collection</h2>
        <div className="filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2025 Zoya Fashion | Designed with ❤️</p>
      </footer>
    </div>
  );
}

export default App;
