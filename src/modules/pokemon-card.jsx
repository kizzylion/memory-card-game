const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card flex flex-col items-center justify-center  w-full h-fit bg-yellow-50/60 overflow-clip border-4  rounded-b-xl">
      <div className="aspect-video w-full h-full flex relative  ">
        <div className=" absolute card-bg w-full h-full -z-1 bg-zinc-500  ">
          <img
            src="src/assets/card-background.png"
            className=" z-10   mx-auto object-cover  mix-blend-multiply"
          />
        </div>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          className=" z-10  h-4/5 mx-auto my-auto object-cover"
        />
      </div>
      <p className="pokemon-solid  text-lg  p-1 border-t-4 bg-yellow-300/60 border-zinc-50/50 w-full text-center capitalize text-blue-800 ">
        {pokemon.name}
      </p>
    </div>
  );
};

export default PokemonCard;
