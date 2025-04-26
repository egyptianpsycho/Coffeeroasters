export const stepsData = [
    {
      id: 1,
      title: "Preferences",
      question: "How do you drink your coffee?",
      options: [
        { title: "Capsule", description: "Compatible with Nespresso systems and similar brewers" },
        { title: "Filter", description: "For pour over or drip methods like Aeropress, Chemex, and V60" },
        { title: "Espresso", description: "Dense and finely ground beans for an intense, flavorful experience" },
      ],
    },
    {
      id: 2,
      title: "Bean type",
      question: "What type of coffee?",
      options: [
        { title: "Single origin", description: "Distinct, high quality coffee from a specific family-owned farm" },
        { title: "Decaf", description: "Just like regular coffee, except the caffeine has been removed" },
        { title: "Blended", description: "Combination of two or three dark roasted beans of organic coffees" },
      ],
    },
    {
      id: 3,
      title: "Quantity",
      question: "How much would you like?",
      options: [
        { title: "250g", description: "Perfect for the solo drinker. Yields about 12 delicious cups." , prices:{once:"$7.20", twice:"$9.60" ,monthly:"$12.00" ,} },
        { title: "500g", description: "Perfect option for a couple. Yields about 40 delectable cups." , prices:{once:"$13.00", twice:"$17.50" ,monthly:"$22.00" ,}},
        { title: "1000g", description: "Perfect for offices and events. Yields about 90 delightful cups." , prices:{once:"$22.00", twice:"$32.00" ,monthly:"$42.00" ,}},
      ],
    },
    {
      id: 4,
      title: "Grind option",
      question: "Want us to grind them?",
      options: [
        { title: "Wholebean", description: "Best choice if you cherish the full sensory experience" },
        { title: "Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress" },
        { title: "Cafetiére", description: "Coarse ground beans specially suited for french press coffee" },
    ],
},
{
    id: 5,
    title: "Deliveries",
    question: "How often should we deliver?",
    options: [
          { title: "Every week", description: " per shipment. Includes free first-class shipping." },
          { title: "Every 2 weeks", description: " per shipment. Includes free priority shipping." },
          { title: "Every month", description: " per shipment. Includes free priority shipping." },
      ],
    },
  ];