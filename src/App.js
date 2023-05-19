import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // État pour stocker la valeur de recherche

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchValue
      )
      .then((res) => setMealsData(res.data.meals));
  }, [searchValue]);

  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input
        id="search"
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="meals-container">
        {mealsData &&
          mealsData
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default App;
