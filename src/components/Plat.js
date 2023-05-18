import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Plat = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => setData(res.data.meals));
  }, []);

  return (
    <div className="plat">
      <ul>
        {data.map((plat, idMeal) => (
          <Card key={plat.idMeal} plat={plat} />
        ))}
      </ul>
    </div>
  );
};

export default Plat;
