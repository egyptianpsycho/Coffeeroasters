import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to={"/plan"}>
            <button>Create your plan</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
