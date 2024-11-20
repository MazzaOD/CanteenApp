import React from "react";

const Banner = ({ title, subtitle, imageURL, setView }) => (
    <section className="banner">
      <div className="content">
        <h1>{title}</h1>
        <span className="call-to-action">
          {subtitle} <i className="fas fa-long-arrow-alt-right"></i>
        </span>
        <button className="explore-btn" onClick={() => setView('menu')}>
          Explore Menu
        </button>
      </div>
      <img src={imageURL} alt="Banner" />
    </section>
  );

export default Banner;
