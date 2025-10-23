import React, { useState } from "react";
import products from "../data";

export default function Shop() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Dress", "Top", "Jacket", "Skirt"];

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section className="products">
      <h2 className="section-title">Shop All</h2>

      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
