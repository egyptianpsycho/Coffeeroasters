import React from "react";

const Headquarters = () => {
  return (
    <section className="quarters">
      <h3>Our headquarters</h3>
      <div className="quarters-cards">
        <div className="card">
          <img src="/images/kingdom.png" alt="uk" />
          <h2>United Kingdom</h2>
          <span>68 Asfordby Rd</span>
          <span>Alcaston</span>
          <span>SY6 1YA</span>
          <span>+44 1241 918425</span>
        </div>
        <div className="card">
          <img src="/images/canada.png" alt="uk" />
          <h2>Canada</h2>
          <span>1528 Eglinton Avenue</span>
          <span>Toronto</span>
          <span>Ontario M4P 1A6</span>
          <span>+1 416 485 2997</span>
        </div>
        <div className="card">
          <img src="/images/australia.png" alt="uk" />
          <h2>Australia</h2>
          <span>36 Swanston Street</span>
          <span>Kewell</span>
          <span>Victoria</span>
          <span>+61 4 9928 3629</span>
        </div>
      </div>
    </section>
  );
};

export default Headquarters;
