import React from "react";

const Choose = () => {
  return (
    <section
      className="how-to"
      style={{
        backgroundColor: "#2C343E",
        marginTop: "20px",
        borderRadius: "8px",
        padding: "116px 85px 100px",
        marginBottom:"168px",
      }}
    >
      <div className="lines-plan">
        <div className="line-plan"></div>
        <div className="line-plan"></div>
      </div>
      <div className="how-to-content" >
        <ol>
          <li>
            <h4 style={{ color: "rgb(254, 252, 247)" }}>Pick your coffee</h4>
            <p style={{ color: "rgb(254, 252, 247)" }}>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </li>
          <li>
            <h4 style={{ color: "rgb(254, 252, 247)" }}>
              Choose the frequency
            </h4>
            <p style={{ color: "rgb(254, 252, 247)" }}>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </li>
          <li>
            <h4 style={{ color: "rgb(254, 252, 247)" }}>Receive and enjoy!</h4>
            <p style={{ color: "rgb(254, 252, 247)" }}>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-className coffees curated to provide
              a distinct tasting experience.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Choose;
