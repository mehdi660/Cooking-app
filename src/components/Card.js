import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <em>Origine : {meal.strArea}</em>
      <img src={meal.strMealThumb} alt={"Présentation de " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
