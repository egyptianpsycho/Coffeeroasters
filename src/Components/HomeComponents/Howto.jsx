import React from "react";
import { Link } from "react-router-dom";
const Howto = () => {
  return (
    <section className="how-to">
      <h3>How it works</h3>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="how-to-content">
        <ol>
          <li>
            <h4>Pick your coffee</h4>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </li>
          <li>
            <h4>Choose the frequency</h4>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>
          <li>
            <h4>Receive and enjoy!</h4>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-className coffees curated to provide a
              distinct tasting experience.
            </p>
          </li>
        </ol>
        <Link to={"/plan"}>
          <button>Create your plan</button>
        </Link>{" "}
      </div>
    </section>
  );
};

export default Howto;
