import React from "react";
import "./Pokemon.css";

function Pokemon({ pokemon }) {
  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dark: "#705848",
    dragon: "#7038F8",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };

  const typeColor = typeColors[pokemon.types[0].type.name];

  const onClick = () => {
    window.location = `https://bartosz-wiacek.github.io/pokedex/#/pokemon/${pokemon.id}`;
  };

  return (
    <div
      className="pokeBox"
      style={{ backgroundColor: typeColor }}
      onClick={onClick}
    >
      <div className="id">#{pokemon.id}</div>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      <div className="name">{pokemon.name}</div>
    </div>
  );
}

export default Pokemon;
