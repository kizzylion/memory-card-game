import { useEffect } from "react";
import spImg from "../assets/splashimg.png";
import { motion, useAnimation } from "framer-motion";
function SplashImage() {
  const controls = useAnimation();

  useEffect(() => {
    // Start the initial scale and rotate animation
    controls.start({
      scale: 1,
      rotate: 360,
      y: 0,
      z: 0,
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [controls]);

  const handleAnimationComplete = () => {
    // Start the bouncing animation once the scale and rotate complete
    controls.start({
      y: [0, -20, 0],
      z: [0, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: 0, y: 0, z: 0 }} // Initial state
      animate={controls}
      onAnimationComplete={handleAnimationComplete} //Trigger bounce on completion
      transition={{
        duration: 2, // Duration for one bounce
        ease: "easeInOut", // Smooth in-out effect
        repeat: Infinity, // Loop the animation infinitely
        repeatType: "loop", // Restart the animation after each bounce
      }}
      className="aspect-square flex mx-auto h-1/2 lg:h-3/6"
    >
      <img src={spImg} alt="splash h-full logo mt-auto" />
    </motion.div>
  );
}
function Instruction() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }} // Start off-screen to the left
      animate={{ opacity: 1, scaleX: 1 }} // Fade in and move into position
      transition={{ delay: 3, type: "spring", stiffness: 70, duration: 2 }} // Adjust the smoothness of the animation
      style={{ originX: 0 }} // Set the unrolling origin to the left
      className="text-center w-full lg:w-5/12 bg-amber-800 px-4 py-3 rounded-lg border-4 border-amber-400/60 md:rounded-xl mb-5 md:mb-8"
    >
      <h5 className="pokemon-solid text-amber-300 mb-2 font-bold text-xl ">
        How To Play
      </h5>
      <p className="comic-neue-regular text-amber-500 text-base md:text-md font-bold leading-6">
        Tap each picture to earn points, but don’t tap the same picture twice.
        Remember and score big!
      </p>
    </motion.div>
  );
}

const SplashScreen = ({ setSplashScreen }) => {
  return (
    <div
      id="game"
      className="bg-[url('./assets/card-background2.svg')] h-full bg-cover bg-top lg:bg-center bg-no-repeat bg-fixed bg-black/50 bg-blend-multiply grid grid-cols-1 grid-rows-1 place-content-center items-center"
    >
      <div className="h-4/5 max-w-7xl mx-auto w-full flex flex-col items-center px-8 md:px-32 gap-7 md:gap-7 lg:gap-5 ">
        <SplashImage />
        <Instruction />

        <motion.button
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 2 }}
          type="button"
          onClick={() => setSplashScreen(false)}
          className="comic-neue-bold bg-white hover:bg-gray-100  text-blue-900 font-bold text-base md:text-lg  px-7 py-2 rounded-full shadow-md drop-shadow-md shadow-gray-900 ease-out duration-300"
        >
          Start Game
        </motion.button>
      </div>
    </div>
  );
};

export default SplashScreen;
