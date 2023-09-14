import Store from "./store";
// helpers
const qs = (s) => document.querySelector(s);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const isAnagram = (word, inputWord) =>
  word.toLowerCase() === inputWord.toLowerCase();

const getHasCorrectAnswerByWordIndex = () => {
  // Store.getState()
  const { words, index } = Store.getState();
  const { hasCorrectAnswer } = words[index];
  return hasCorrectAnswer;
};

const getNoOfCorrectAnswers = () => {
  const { words } = Store.getState();
  return words.filter((word) => word.hasCorrectAnswer).length;
};

// TODO: CHECK IF FUNCTION IS REALLY USE. -> Funtion is not in use.
// const getnoOfAttemptsbyIndex = () => {
//   const { words, index } = Store.getState();
//   const { noOfAttempts } = words[index];
//   return noOfAttempts;
// };

const sumAttempts = () => {
  const { words } = Store.getState();
  return words.map((word) => word.noOfAttempts).reduce((acc, n) => acc + n, 0);
};

const Utils = {
  qs,
  shuffleArray,
  isAnagram,
  getHasCorrectAnswerByWordIndex,
  getNoOfCorrectAnswers,
  // getnoOfAttemptsbyIndex,
  sumAttempts,
};

export default Utils;
