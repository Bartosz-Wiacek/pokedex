import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./PokemonDetails.css";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="pokemon-details-container">
        <div className="pokemon-image-container">
          <img
            className="pokemon-image"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="pokemon-info-container">
          <h1 className="pokemon-name">{pokemon.name}</h1>
          <div className="pokemon-info">
            <div>
              <h2>Abilities:</h2>
              <ul className="pokemon-abilities-list">
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Stats:</h2>
              <ul className="pokemon-stats-list">
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Height:</h2>
              <p className="pokemon-height">{pokemon.height / 10} m</p>
            </div>
            <div>
              <h2>Weight:</h2>
              <p className="pokemon-weight">{pokemon.weight / 10} kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
