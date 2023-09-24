import { createStore } from "zustand/vanilla";
const INIT_STATE = {
  words: [
    {
      id: 1,
      word: "done",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "Completed or finished; no more actions needed.",
      points: 0,
    },
    {
      id: 2,
      word: "should",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "Used to express obligation, expectation, or advice.",
      points: 0,
    },
    {
      id: 3,
      word: "there",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "In that place or location; opposite of 'here.'",
      points: 0,
    },
    {
      id: 4,
      word: "ready",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "Prepared or willing to do something; fully prepared.",
      points: 0,
    },
    {
      id: 5,
      word: "long",
      hasCorrectAnswer: null,
      noOfAttempts: 0,
      hint: "Having a great length or duration; not short.",
      points: 0,
    },
  ],
};

// TODO: take index from app. -> DONE
const getWords = () => getState().words;

const setAnswerToCorrect = (id) =>
  setState(
    (state) => ({
      ...state,
      words: state.words.map((word) =>
        word.id === id
          ? { ...word, hasCorrectAnswer: true, points: word.points + 10 }
          : word
      ),
    }),
    true
  );

const reset = () => setState((state) => INIT_STATE, true);

const setAnswerToWrong = (id) => {
  setState(
    (state) => ({
      ...state,
      words: state.words.map((word) =>
        word.id === id
          ? {
              ...word,
              hasCorrectAnswer: false,
              noOfAttempts: word.noOfAttempts + 1,
              points: word.points + 0,
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
  setAnswerToCorrect,
  setAnswerToWrong,
  INIT_STATE,
  reset,
};

export default Store;
