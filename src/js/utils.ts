import Store from "./store";
import * as R from "ramda";
// helpers
const qs = (s: string) => document.querySelector(s);

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const isAnagram = (word: string, inputWord: string) =>
  word.toLowerCase() === inputWord.toLowerCase();

const getCurrentWord = () =>
  Store.getWords().find((word) => R.includes(word.isCorrect, [false, null]));

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
  sumCorrectAnswers,
  sumAttempts,
  sumPoints,
  sumWords,
  getCurrentWord,
};

export default Utils;
