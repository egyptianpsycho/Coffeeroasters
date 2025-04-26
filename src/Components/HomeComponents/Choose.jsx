import React from "react";

const Choose = () => {
  return (
    <section className="choose">
      <div className="choose-heading">
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="choose-boxs">
        <div className="why-us-card">
          <img src="images/coffee-bean.png" alt="bean" />
          <h3>Best quality</h3>
          <p>
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </div>
        <div className="why-us-card">
          <img src="images/Combined-Shape.png" alt="bean" />
          <h3>Exclusive benefits</h3>
          <p>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </div>
        <div className="why-us-card">
          <img src="images/Combined-Shape-end.png" alt="bean" />
          <h3>Free shipping</h3>
          <p>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Choose;
