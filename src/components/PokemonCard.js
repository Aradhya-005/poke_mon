import React from "react";
import Image from "next/image";


const PokemonCard = ({ name, image }) => {
  return (
    <div className="pokemon-card">
      <Image src={image} alt={name}  width={200} height={200} />
      <h2>{name}</h2>
    </div>
  );
};

export default PokemonCard;
