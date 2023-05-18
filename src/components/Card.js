import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2>{meal.strMeal}</h2>
      <em>Origine : {meal.strArea}</em>
      <img src={meal.strMealThumb} alt={"Présentation de " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <a id="lien-recette" href={meal.strYoutube}>
        Vidéo de la recette
      </a>
      {/* <p> Vidéo de la recette : {meal.strYoutube}</p> */}
    </div>
  );
};

export default Card;
