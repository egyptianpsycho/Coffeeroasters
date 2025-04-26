import React, { useState } from "react";

const Step = ({
  step,
  handle,
  selectedOption,
  Preferences,
  handleSelectedGrams,
  price,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  if (step.title === "Grind option" && Preferences === "Capsule") {
    return null;
  }

  return (
    <section className="step">
      <div className="temp">
        <div className="step-heading" onClick={toggleOpen}>
          <button onClick={toggleOpen}>{step.question}</button>
          <img
            src="/images/icon-arrow.svg"
            alt="icon arrow"
            width={19}
            height={13}
            className={isOpen ? "arrow flip" : "arrow"}
          />
        </div>

        <div className="options">
          {step.options.map((option, index) => {
            if (step.title === "Deliveries" && option.title === "Every month") {
              option.description = `${price?.monthly} per shipment yearly. Includes free priority shipping.`;
            }
            if (
              step.title === "Deliveries" &&
              option.title === "Every 2 weeks"
            ) {
              option.description = `${price?.twice} per shipment yearly. Includes free priority shipping.`;
            }
            if (step.title === "Deliveries" && option.title === "Every week") {
              option.description = `${price?.once} per shipment yearly. Includes free priority shipping.`;
            }
            return (
              <div
                className={`step-option ${isOpen ? "open" : "closed"} `}
                key={index}
                onClick={() => {
                  handle(step.title, option.title);
                  if (step.title === "Quantity") {
                    handleSelectedGrams(option.title);
                  }
                }}
              >
                <div
                  className={`step-option-heading ${
                    selectedOption === option.title ? "active-option" : ""
                  } `}
                >
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Step;
