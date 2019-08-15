import React, { useState, useEffect } from "react";
import axios from "axios";
import nasaKey from "../NasaKey";
import "./NasaCard.css";

var url = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

function Fetch({ url }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const response = await axios.get(url);
      if (mounted) {
        setData(response.data);
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, [url]);

  if (!data) {
    return <span>Loading data...</span>;
  }

  return <img src={data.url} alt={data.title} />;
}

export default Fetch;
