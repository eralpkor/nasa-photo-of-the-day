import React from "react";
import "./App.css";
import './App.sass';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>


      <div className="field">
  <p className="control">
    <span className="select">
      <select>
        <option>Select dropdown</option>
      </select>
    </span>
  </p>
</div>

<div className="field">
  <div className="control">
    <input className="input" type="text" placeholder="Input" />
  </div>
</div>

<div className="buttons">
  <a className="button is-primary">Primary</a>
  <a className="button is-link">Link</a>
</div>

    </div>
  );
}

export default App;
