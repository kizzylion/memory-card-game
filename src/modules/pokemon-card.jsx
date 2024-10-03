const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card flex flex-col items-center justify-center  w-full h-fit">
      <div className="aspect-video w-full h-full flex relative  ">
        <div className=" absolute card-bg w-full h-full -z-1 bg-zinc-500">
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
      <p className="text-xl font-bold">{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;
