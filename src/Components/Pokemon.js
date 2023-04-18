import React from "react";
import "./Pokemon.css";

function Pokemon({ pokemon }) {
  return (
    <div className="pokeBox">
      <div className="id">#{pokemon.id}</div>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      <div className="name">{pokemon.name}</div>
    </div>
  );
}

export default Pokemon;
