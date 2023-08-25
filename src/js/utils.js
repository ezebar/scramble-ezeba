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
  const { words, index } = Store.getState();
  const { hasCorrectAnswer } = words[index];
  return hasCorrectAnswer;
};

const getNoOfCorrectAnswers = () => {
  const { words } = Store.getState();
  const noOfCorrectAnswer = words.filter(
    (word) => word.hasCorrectAnswer).length;
  return noOfCorrectAnswer;
};

const getnoOfAttemptsbyIndex = () => {
  const {words, index} = Store.getState();
  const {noOfAttempts} = words[index];
  return noOfAttempts;
}

//sume each word.noOfAttemps value 
const getNoOfAttempts = () => {
  const {words} = Store.getState();
  const noOfAttemptsAnswer = words.map((word) => word.noOfAttempts)
  .reduce((accumulator, current)=> accumulator + current, 0);
  return noOfAttemptsAnswer;
}

const Utils = {qs, shuffleArray, isAnagram, getHasCorrectAnswerByWordIndex, getNoOfCorrectAnswers, getnoOfAttemptsbyIndex, getNoOfAttempts};

export default Utils;