import React, { useState, useEffect } from "react";
import nasaKey from "../NasaKey";
import axios from "axios";
import "../App.css";
import "./NasaCard.css";

function randomDate(url) {
  // let date = "&date=2012-03-20";
  let date = `&date=`;
  var randomDay = String(Math.floor(Math.random() * 30 + 1));
  var randomMonth = String(Math.floor(Math.random() * 12 + 1));
  var randomYear = String(Math.floor(Math.random() * 18 + 1));
  if (randomDay.length === 1) randomDay = `0${randomDay}`;
  if (randomMonth.length === 1) randomMonth = `0${randomMonth}`;
  if (randomYear.length === 1) randomYear = `0${randomYear}`;

  console.log(
    "random image",
    `${url}${date}20${randomYear}-${randomMonth}-${randomDay}`
  );
  return `${url}${date}20${randomYear}-${randomMonth}-${randomDay}`;
}

function changeImage() {
  var url = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;
  console.log(randomDate(url));
  return randomDate(url);
}

function NasaPhoto(params) {
  const [images, setImage] = useState([]);
  const [date, setDate] = useState(randomDate());

  let url = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}${date}`;

  useEffect(() => {
    axios
      .get(
        changeImage()
        // `${url}`
        // `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}${randomDate()}`
      )
      .then(response => {
        const image = response.data;
        console.log("Nasa images;", image);

        setImage(image);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="nasa-photo">
        <img src={images.url} alt={images.title} />

        <p>{images.copyright || ""}</p>
        <h2>{images.title}</h2>
        <button
          onClick={() => window.open(images.hdurl)}
          className="button is-primary"
        >
          Click to see full size image
        </button>
      </div>
      <p>{images.explanation}</p>
      <h2>{`Image was taken on: ${images.date || ""}`}</h2>
    </div>
  );
}

export default NasaPhoto;
