import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // État pour stocker la valeur de recherche

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => setMealsData(res.data.meals));
  }, []);

  // Gestionnaire d'événements pour la saisie de recherche
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  // Filtrer les plats en fonction de la valeur de recherche et les trier alphabétiquement
  const filteredMeals = mealsData
    .filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => a.strMeal.localeCompare(b.strMeal));

  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input
        id="search"
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        value={searchValue}
        onChange={handleSearch}
      />
      <div className="meals-container">
        {filteredMeals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
