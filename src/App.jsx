import { useEffect, useState } from "react";
import axios from "axios";
import Game from "./modules/gamesSection";

let didInit = false;
function App() {
  const [pokemons, setPokemons] = useState("");
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  // const [name, setName] = useState("");
  // const [weight, setWeight] = useState("");
  // const [number, setNumber] = useState(1);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      loadBestScoreFromLocalStorage();
      loadPokemonData();
    }
    loadPokemonData();
  }, []);

  function loadBestScoreFromLocalStorage() {
    const bestScore = localStorage.getItem("bestScore");
    if (bestScore) {
      setBestScore(bestScore);
    } else {
      localStorage.setItem("bestScore", 0);
      setBestScore(0);
    }
  }

  async function loadPokemonData() {
    const pokemonUrls = [];

    // Step 1: Create URLs for Pokémon 1 to 20
    for (let i = 1; i <= 20; i++) {
      pokemonUrls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }

    try {
      const responses = await Promise.all(pokemonUrls.map((url) => fetch(url)));
      const pokemonData = await Promise.all(responses.map((res) => res.json()));

      console.log(pokemonData);
      setPokemons(pokemonData);
      // setName(data.name);
      // setWeight(data.weight);
      // setWeight(data.weight);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className="bg-gray-950 h-full text-white comic-neue-regular">
      <Game
        pokemons={pokemons}
        bestScore={bestScore}
        setBestScore={setBestScore}
        score={score}
        setScore={setScore}
      />
      {/* <div>
        <h1>MEMORY CARD GAME</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button onClick={getPokemon}>Get Pokemon</button>
        <h2>Name: {name}</h2>
        <h4>Weigh: {weight} kg</h4>
        <img
          src={
            pokemon ? (
              pokemon.sprites.other.dream_world.front_default
            ) : (
              <p>Loading... </p>
            )
          }
        />
        <p>My Abilities are:</p>
        {pokemon ? (
          pokemon.abilities.map((value, key) => {
            return <p key={key}>{value.ability.name}</p>;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
    </main>
  );
}

export default App;
