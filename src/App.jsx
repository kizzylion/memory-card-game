import { useEffect, useState } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import Game from "./modules/gamesSection";
import { shuffleArray } from "./modules/utility";
import SplashScreen from "./modules/splash";
import { Analytics } from "@vercel/analytics/react"; // import trackEvent
import { track } from "@vercel/analytics";

let didInit = false;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [splashScreen, setSplashScreen] = useState(true);
  const [isGameover, setIsGameOver] = useState(false);

  useEffect(() => {
    if (!didInit) {
      didInit = true;
      loadBestScoreFromLocalStorage();
      loadPokemonData();
      <Analytics />;
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
      setPokemons(shuffleArray(pokemonData));
      shuffleArray(pokemonData);
    } catch (error) {
      alert(error);
    }
  }

  function onRestart() {
    setIsGameOver(false);
    setScore(0);
    setPokemons(shuffleArray(pokemons));
    loadBestScoreFromLocalStorage();
    loadPokemonData();

    // Track restart event
    track("Game Restarted", { bestScore, score });
  }

  return (
    <main className="bg-gray-950 h-full text-white comic-neue-regular">
      {splashScreen && (
        <SplashScreen
          setSplashScreen={(showSplash) => {
            setSplashScreen(showSplash);
            if (!showSplash) {
              // Track start game event
              track("Game Started", { bestScore });
            }
          }}
        />
      )}
      {!splashScreen && (
        <Game
          pokemons={pokemons}
          bestScore={bestScore}
          setBestScore={setBestScore}
          score={score}
          setScore={setScore}
          setPokemons={setPokemons}
          isGameover={isGameover}
          setIsGameOver={setIsGameOver}
        />
      )}
      {isGameover && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-amber-900 p-6 rounded-lg shadow-lg  w-96 text-center border-[1.15rem]  border-amber-300 rounded-t-[5.5rem] rounded-b-[8rem] ">
            <div>
              <img src={logo} alt="" className="h-20 md:h-24 mx-auto mb-5" />
            </div>
            <h2 className="pokemon-solid text-3xl font-bold mb-4 text-amber-500 comic-neue-bold">
              Game Over!
            </h2>
            <p className="comic-neue-bold text-lg mb-2 text-amber-300">
              Your Score: {score}
            </p>
            <p className="comic-neue-bold text-lg mb-6 text-amber-500">
              Best Score: {bestScore}
            </p>
            <button
              className="comic-neue-bold bg-amber-500 text-amber-950 px-4 py-2 rounded-lg  hover:bg-amber-600 transition shadow-xl"
              onClick={onRestart}
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
