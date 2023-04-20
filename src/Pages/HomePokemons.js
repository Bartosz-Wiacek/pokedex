import React, { useState } from "react";
import PokemonFetch from "./PokemonFetch";
import Navbar from "../Components/Navbar";

function HomePokemons() {
  const [page, setPage] = useState(1);

  function makeArray() {
    let array = [];
    for (let i = (page - 1) * 20 + 1; i <= page * 20; i++) {
      array.push(i);
    }
    return array;
  }

  const pokemonIds = makeArray();

  function handleNextClick() {
    setPage(page + 1);
  }

  function handlePrevClick() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="App">
        <PokemonFetch pokemonIds={pokemonIds} />
      </div>
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default HomePokemons;
