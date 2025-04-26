import React from "react";
import { useState } from "react";
import { stepsData } from "../Constants/index";
import Step from "./Step";
import PlanSummary from "./PlanSummary";
const CreatePlan = () => {
  const [selections, setSelections] = useState({});
  const isGrindRequired = selections["Preferences"] !== "Capsule";
  const [selectedGrams, setSeletedGrams] = useState("250g");
  const handleSelect = (stepTittle, optionTitle) => {
    setSelections({ ...selections, [stepTittle]: optionTitle });
  };
  const handleSelectedGrams = (grams) => {
    setSeletedGrams(grams);
  };
  const getPrice = () => {
    if (selectedGrams === "250g") {
      return stepsData[2].options[0].prices;
    } else if (selectedGrams === "500g") {
      return stepsData[2].options[1].prices;
    } else if (selectedGrams === "1000g") {
      return stepsData[2].options[2].prices;
    }
  };

  const price = getPrice();
  const scrollIntoView = (step) => {
    const target = document.getElementById(step.title);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <div className="steps">
      <div className="side-nav">
        {stepsData.map((nav) => (
          <div className="side-nav-step" key={nav.id} onClick={() => scrollIntoView(nav)}>
            <span>{String(nav.id).padStart(2, "0")}</span>
            <h3>{nav.title}</h3>
          </div>
        ))}
      </div>
      <div className="step-container">
        {stepsData.map((step) => (
          <div className="tmp" key={step.id} id={step.title}>
            <Step
              key={step.id}
              step={step}
              selectedOption={selections[step.title]}
              handle={handleSelect}
              handleSelectedGrams={handleSelectedGrams}
              Preferences={selections["Preferences"]}
              price={price}
            />
          </div>
        ))}
        <PlanSummary
          Preferences={selections["Preferences"]}
          BeanType={selections["Bean type"]}
          Quantity={selections["Quantity"]}
          GrindOption={selections["Grind option"]}
          Deliveries={selections["Deliveries"]}
        />
        <button
          className={
            selections["Preferences"] &&
            selections["Bean type"] &&
            selections["Quantity"] &&
            (!isGrindRequired || selections["Grind option"]) &&
            selections["Deliveries"]
              ? "btn-Plan"
              : "disable-btn"
          }
        >
          Create my plan!
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;
