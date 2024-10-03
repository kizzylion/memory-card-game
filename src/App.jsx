import { useEffect, useState } from "react";
import axios from "axios";
import Game from "./modules/gamesSection";

function App() {
  const [pokemons, setPokemons] = useState("");
  // const [name, setName] = useState("");
  // const [weight, setWeight] = useState("");
  // const [number, setNumber] = useState(1);

  // let url = `https://pokeapi.co/api/v2/pokemon/${number}`;
  let url = `https://pokeapi.co/api/v2/pokemon`;

  useEffect(() => {
    // if (!number) return;
    getPokemon();
  }, [url]);

  async function getPokemon() {
    try {
      const data = await axios.get(url).then((response) => {
        return response.data;
      });

      console.log(data.results);
      setPokemons(data.results);
      // setName(data.name);
      // setWeight(data.weight);
      // setWeight(data.weight);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className="bg-gray-950 h-dvh text-white ">
      <Game pokemons={pokemons} />
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
