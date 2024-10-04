import spImg from "../assets/splashimg.png";

function SplashImage() {
  return (
    <div className="aspect-square flex mx-auto h-1/2 lg:h-4/6">
      <img src={spImg} alt="splash h-full logo mt-auto" />
    </div>
  );
}
function Instruction() {
  return (
    <div className="text-center w-full lg:w-2/4 bg-gray-950/50 px-4 py-3 rounded-lg">
      <p className="comic-neue-regular text-white text-base md:text-lg font-bold leading-6">
        Tap each picture to earn points, but don’t tap the same picture twice.
        Remember and score big!
      </p>
    </div>
  );
}

const SplashScreen = ({ setSplashScreen }) => {
  return (
    <div
      id="game"
      className="bg-[url('./assets/card-background2.svg')] h-full bg-cover bg-top lg:bg-center bg-no-repeat bg-fixed bg-black/50 bg-blend-multiply grid grid-cols-1 grid-rows-1 place-content-center items-center"
    >
      <div className="h-4/5 max-w-7xl mx-auto w-full flex flex-col items-center px-5 md:px-32 gap-7 md:gap-7 lg:gap-5 ">
        <SplashImage />
        <Instruction />

        <button
          type="button"
          onClick={() => setSplashScreen(false)}
          className="comic-neue-bold bg-white hover:bg-gray-100 hover:scale-110 text-blue-900 font-bold text-base md:text-lg  px-7 py-2 rounded-full shadow-md drop-shadow-md shadow-gray-900 "
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
