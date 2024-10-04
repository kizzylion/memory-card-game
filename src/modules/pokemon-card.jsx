import { useRef, useState } from "react";

const PokemonCard = ({ pokemon, bestScore, score, setBestScore, setScore }) => {
  const [isClicked, setIsClicked] = useState(false);

  const ref = useRef(null);

  function updateCard(newScore) {
    setScore(newScore);
    setIsClicked(true);
  }
  const handleClick = () => {
    if (isClicked) {
      console.log("game over");
      if (score > bestScore) {
        localStorage.setItem("bestScore", score);
        setBestScore(score);
        setScore(0);
      }
      return;
    }
    // add rotate-y to the class this ref
    ref.current.classList.add("rotate-y");

    updateCard(score + 1);
  };

  return (
    <div
      className="card flex flex-col items-center justify-center  w-full h-fit bg-yellow-50/60 overflow-clip border-4 border-amber-500  rounded-b-xl hover:-translate-y-3 ease-out duration-300 shadow-2xl shadow-gray-950/70 cursor-pointer rotate-0 "
      onClick={handleClick}
      ref={ref}
    >
      <div className="absolute inset-0 z-10"></div>
      <div className="aspect-video w-full h-full flex relative  ">
        <div className=" absolute card-bg w-full h-full -z-1 bg-zinc-500  ">
          <img
            alt="background"
            loading="lazy"
            aria-disabled
            draggable="false"
            decoding="async"
            disabled
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
