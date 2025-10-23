import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/images/hero-banner.jpg"
        alt="Zoya Fashion Banner"
        className="hero-img"
      />

      <div className="hero-text">
        <h2>Fall Collection 2025</h2>
        <p>Effortless elegance for every moment ✨</p>
        <Link to="/shop">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </div>
    </section>
  );
}
