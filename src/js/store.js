import { createStore } from "zustand/vanilla";
const INIT_STATE = {
  words: [
    {
      id: 1,
      word: "done",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "Completed or finished; no more actions needed.",
    },
    {
      id: 2,
      word: "should",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "Used to express obligation, expectation, or advice.",
    },
    {
      id: 3,
      word: "there",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "In that place or location; opposite of 'here.'",
    },
    {
      id: 4,
      word: "ready",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "Prepared or willing to do something; fully prepared.",
    },
    {
      id: 5,
      word: "long",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "Having a great length or duration; not short.",
    },
  ],
  index: 0,
};

const getWords = () => getState().words;
const getIndex = () => getState().index;

const setHasCorrectAnswer = (id) =>
  setState(
    (state) => ({
      ...state,
      // scoreIndex: state.scoreIndex + 1
      words: state.words.map((word) =>
        word.id === id ? { ...word, hasCorrectAnswer: true } : word
      ),
    }),
    true
  );

const setIndex = () => {
  setState((state) => ({ ...state, index: state.index + 1 }), true);
};

const reset = () => setState((state) => INIT_STATE, true);

const setHasCorrectAnswerFalseAndIncrNoOfAttemps = (id) => {
  setState(
    (state) => ({
      ...state,
      words: state.words.map((word) =>
        word.id === id
          ? {
              ...word,
              hasCorrectAnswer: false,
              noOfAttempts: word.noOfAttempts + 1,
            }
          : word
      ),
    }),
    true
  );
};
// const {getState, setState} = store; ==> without descontructing and below descontructing
const { getState, setState } = createStore(() => INIT_STATE);

const Store = {
  getState,
  setState,
  getWords,
  getIndex,
  setHasCorrectAnswer,
  setHasCorrectAnswerFalseAndIncrNoOfAttemps,
  setIndex,
  INIT_STATE,
  reset,
};

export default Store;
