import Store from "./store";
import * as R from "ramda";
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

const getHasCorrectAnswer = () =>
  Store.getWords().find((word) =>
    R.includes(word.hasCorrectAnswer, [false, null])
  );

// TODO: function getCurrentWord to fix the hint function. It's same function as getHasCorrectAnswer but used only in btnHintDOM eventListener. So I'm repeating the function, something we shouldn't do.
//R.find(R.propEq(2, 'a'))(xs); -> pending to try.
//R.includes(3, [1, 2, 3]); -> DONE
const getCurrentWord = () =>
  Store.getWords().find((word) =>
    R.includes(word.hasCorrectAnswer, [false, null])
  );

//TODO: delete index and make it work as it was. -> DONE
const getHasCorrectAnswerBoolean = () => {
  const { hasCorrectAnswer } = Store.getWords()
    .slice()
    .reverse()
    .find((word) => [true, false].includes(word.hasCorrectAnswer));
  return hasCorrectAnswer;
};

const getNoOfWords = () => Store.getWords().length;

const getNoOfCorrectAnswers = () =>
  Store.getWords().filter(R.prop("hasCorrectAnswer")).length;

const sumAttempts = () =>
  Store.getWords().map(R.prop("noOfAttempts")).reduce(R.add, 0);

const sumPoints = () => Store.getWords().map(R.prop("points")).reduce(R.add, 0);

const Utils = {
  qs,
  shuffleArray,
  isAnagram,
  getHasCorrectAnswerBoolean,
  getNoOfCorrectAnswers,
  sumAttempts,
  sumPoints,
  getHasCorrectAnswer,
  getNoOfWords,
  getCurrentWord,
};

export default Utils;
