import React from "react";
import "./App.css";
import Home from "./Home";

function App() {
  function makeArray() {
    let array = [];
    for (let i = 1; i <= 20; i++) {
      array.push(i);
    }
    return array;
  }

  const pokemonIds = makeArray();
  return (
    <div className="App">
      <a>Hello World!</a>
      <Home pokemonIds={pokemonIds} />
    </div>
  );
}

export default App;
