import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <em>{meal.strArea}</em>
      <img src={meal.strMealThumb} alt="Présentation du plat" />
    </div>
  );
};

export default Card;
