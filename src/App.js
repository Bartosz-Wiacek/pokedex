import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePokemons from "./Pages/HomePokemons";
import PokemonDetails from "./Pages/PokemonDetails";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<HomePokemons />} />
          <Route path="/pokedex/#/about" element={<About />} />
          <Route path="/pokedex/#/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
