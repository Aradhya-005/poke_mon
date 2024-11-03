import React from "react";
import Image from "next/image";
import PokemonLogo from "../../public/assets/Pokemon-Logo.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
      <Image src={PokemonLogo} alt="Pokémon Logo" className="navbar-logo" />
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search characters"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
