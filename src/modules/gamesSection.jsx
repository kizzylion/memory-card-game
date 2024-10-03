import Header from "./header";
import PokemonCard from "./pokemon-card";

const Game = ({ pokemons }) => {
  return (
    <div
      id="game"
      className="bg-[url('./assets/pokemon-bg-2.jpg')] h-full bg-fit bg-left-top bg-no-repeat bg-fixed bg-black/80 bg-blend-multiply"
    >
      <Header />
      <div className="max-w-7xl mx-auto h-full px-4 pt-4 pb-4 md:px-7 lg:px-20 overflow-auto">
        <div className=" cards w-full h-full overflow-auto pb-24 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-8">
          {pokemons ? (
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
