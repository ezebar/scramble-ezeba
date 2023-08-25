import { createStore } from "zustand/vanilla";

// const {getState, setState} = store; ==> without descontructing and below descontructing
const { getState, setState } = createStore(() => ({
  //words[0].word to access the word or other 
  words: [
    {id:1, word:'done', hasCorrectAnswer: null, noOfAttempts:0},
    {id:2, word:'should', hasCorrectAnswer: null, noOfAttempts:0},
    {id:3, word:'there', hasCorrectAnswer: null, noOfAttempts:0},
    {id:4, word:'ready', hasCorrectAnswer: null, noOfAttempts:0},
    {id:5, word:'long', hasCorrectAnswer: null, noOfAttempts:0}
  ],
  index: 0,
  // scoreIndex: 0,
}));

const Store = { getState, setState };

export default Store;