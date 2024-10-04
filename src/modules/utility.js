export function shuffleArray(arr) {
  let shuffledArray = arr.slice(); // Create a copy of the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // Pick a random index
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
}

let arr = [1234567891011121314151617181920];
console.log(shuffleArray(arr));
