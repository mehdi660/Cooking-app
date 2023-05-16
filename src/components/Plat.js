import axios from "axios";
import React, { useEffect, useState } from "react";

const Plat = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="plat-containter">
      <div className="card"></div>
    </div>
  );
};

export default Plat;
