import React from "react";
import axios from "axios";
import Image from "next/image";
import { notFound } from "next/navigation";
import './details.css'

const PokemonDetails = async ({ params }) => {
  const { name } = params; // Get the Pokémon name from the route params

  try {
    // Fetch Pokémon details using the name
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = result.data;

    return (
      <div className="pokemon-details-container">
        <div className="pokemon-image">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={350}
            height={300}
          />
        </div>
        <div className="pokemon-content">
          <h1>{pokemon.name}</h1>
          <p><span>Height:</span> {pokemon.height}</p>
          <p><span>Weight:</span> {pokemon.weight}</p>
          <p><span>Base experience:</span> {pokemon.base_experience}</p>
          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability, i) => (
              <li key={i}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    // If Pokémon is not found, render the 404 page
    return notFound();
  }
};

export default PokemonDetails;
