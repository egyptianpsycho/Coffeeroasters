import React from "react";

const Collection = () => {
  return (
    <section className="collection">
      <div className="collection-heading">
        <img
          src="images/services_bg-img.png"
          alt="heading-collection"
          className="coll-img"
        />
      </div>
      <div className="collection-prodects">
        <div className="item">
          <img src="/images/kopi1.png" alt="item1" width="250" height="192" />
          <h3>Gran Espresso</h3>
          <p>
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>
        <div className="item">
          <img src="/images/kopi2.png" alt="item2" width="250" height="192" />
          <h3>Planalto</h3>
          <p>
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts
          </p>
        </div>
        <div className="item">
          <img src="/images/kopi3.png" alt="item3" width="250" height="192" />
          <h3>Piccollo</h3>
          <p>
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry
          </p>
        </div>
        <div className="item">
          <img src="/images/kopi4.png" alt="item4" width="250" height="192" />
          <h3>Danche</h3>
          <p>
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collection;
