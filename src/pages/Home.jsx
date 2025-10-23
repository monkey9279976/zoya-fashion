import React from "react";
import Hero from "../components/Hero";
import products from "../data";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="products">
        <h2 className="section-title">New Arrivals</h2>
        <div className="product-grid">
          {products.slice(0, 4).map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
