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

//R.find(R.propEq(2, 'a'))(xs); -> pending to try.
const getCurrentWord = () =>
  Store.getWords().find((word) => R.includes(word.isCorrect, [false, null]));

const getIsCorrect = () => {
  const { isCorrect } = Store.getWords().find((word) =>
    [true, false].includes(word.isCorrect)
  );
  return isCorrect;
  console.log(e); //TODO: what to do when not longer works. -> SOLVED.
};

const sumWords = () => Store.getWords().length;

const sumCorrectAnswers = () =>
  Store.getWords().filter(R.prop("isCorrect")).length;

const sumAttempts = () =>
  Store.getWords().map(R.prop("noOfAttempts")).reduce(R.add, 0);

const sumPoints = () => Store.getWords().map(R.prop("points")).reduce(R.add, 0);

const Utils = {
  qs,
  shuffleArray,
  isAnagram,
  getIsCorrect,
  sumCorrectAnswers,
  sumAttempts,
  sumPoints,
  sumWords,
  getCurrentWord,
};

export default Utils;
