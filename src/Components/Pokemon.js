import React from "react";
import "./Pokemon.css";

function Pokemon({ pokemon }) {
  const onClick = () => {
    window.location = `http://localhost:3000/#/pokemon/${pokemon.id}`;
  };

  return (
    <div className="pokeBox" onClick={onClick}>
      <div className="id">#{pokemon.id}</div>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      <div className="name">{pokemon.name}</div>
    </div>
  );
}

export default Pokemon;
