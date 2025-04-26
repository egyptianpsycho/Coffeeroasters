import React from "react";

const PlanSummary = ({
  Preferences,
  BeanType,
  Quantity,
  GrindOption,
  Deliveries,
}) => {
  const isCapsule = Preferences === "Capsule";

  return (
    <section className="plan-summary">
      <h3>Order Summary</h3>
      <p>
        “I drink my coffee as <span>{Preferences || "_____"}</span>, with a
        <span>{BeanType || "_____"}</span> type of bean.
        <span>{Quantity || "_____"}</span>
        {!isCapsule && (
          <>
            ground ala <span>{GrindOption || "_____"}</span>
          </>
        )}
        , sent to me <span>{Deliveries || "_____"}</span>.”
      </p>
    </section>
  );
};

export default PlanSummary;
