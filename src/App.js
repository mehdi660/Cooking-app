import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => setMealsData(res.data.meals));
  }, []);

  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input
        id="shearch"
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
      />
      <div className="meals-container">
        {mealsData.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
