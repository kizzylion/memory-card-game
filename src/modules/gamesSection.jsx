import Header from "./header";
import PokemonCard from "./pokemon-card";
import { BestScore, Score } from "./score-card";

const Game = ({ pokemons, bestScore, setBestScore, score, setScore }) => {
  return (
    <div
      id="game"
      className="bg-[url('./assets/pokemon-bg-2.jpg')] h-full bg-fit bg-left-top bg-no-repeat bg-fixed bg-black/60 bg-blend-multiply"
    >
      <Header />
      <div className="relative h-full">
        <div className="w-full h-fit relative max-w-7xl  mx-auto px-4 pt-4 pb-4 md:px-7 lg:px-20 ">
          <BestScore bestScore={bestScore} />
          <Score score={score} />
        </div>
        <div className=" relative max-w-7xl mx-auto h-full px-4 pb-4 md:px-7 lg:px-20 overflow-none">
          <div className=" cards w-full h-full overflow-auto overscroll-contain pt-4 pb-36 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-8">
            {pokemons ? (
              pokemons.map((pokemon) => (
                <PokemonCard
                  key={pokemon.name}
                  pokemon={pokemon}
                  bestScore={bestScore}
                  score={score}
                  setScore={setScore}
                  setBestScore={setBestScore}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
