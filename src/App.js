import React from "react";
import "./App.css";
import "./App.sass";
import "./components/NasaCard";
import NasaPhoto from "./components/NasaPhoto";

import Fetch from "./components/Fetch";

function App() {
  // console.log(Data())
  return (
    <div className="App">
      <NasaPhoto />
    </div>
  );
}

export default App;
