import { createStore } from "zustand/vanilla";
import * as R from "ramda";
import { State } from "./types";

let INIT_STATE = {};

const level1 = {
  words: [
    {
      id: 1,
      word: "done",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "Completed or finished; no more actions needed.",
      points: 0,
    },
    {
      id: 2,
      word: "should",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "Used to express obligation, expectation, or advice.",
      points: 0,
    },
    {
      id: 3,
      word: "there",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "In that place or location; opposite of 'here.'",
      points: 0,
    },
    {
      id: 4,
      word: "ready",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "Prepared or willing to do something; fully prepared.",
      points: 0,
    },
    {
      id: 5,
      word: "long",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "Having a great length or duration; not short.",
      points: 0,
    },
  ],
};

const level2 = {
  words: [
    {
      id: 1,
      word: "happy",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "Feeling joy or pleasure.",
      points: 0,
    },
    {
      id: 2,
      word: "know",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "To have information or awareness about something.",
      points: 0,
    },
    {
      id: 3,
      word: "dream",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "A series of thoughts, images, or sensations occurring in a person's mind during sleep.",
      points: 0,
    },
    {
      id: 4,
      word: "test",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "A procedure intended to establish the quality or performance of something.",
      points: 0,
    },
    {
      id: 5,
      word: "find",
      isCorrect: null,
      noOfAttempts: 0,
      hint: "To discover or locate something by searching or exploring.",
      points: 0,
    },
  ],
};

//TODO: add level 2 dinamically pending
const loadLevel = (levelData) => {
  INIT_STATE = levelData;
  console.log(levelData);
};
loadLevel(level1);

const getWords = () => getState().words;

const setAnswerToCorrect = (id: number) =>
  setState(
    (state) => ({
      ...state,
      words: state.words.map((word) =>
        word.id === id
          ? { ...word, isCorrect: true, points: R.add(word.points, 10) }
          : word
      ),
    }),
    true
  );

const setAnswerToWrong = (id: number) => {
  setState(
    (state) => ({
      ...state,
      words: state.words.map((word) =>
        word.id === id
          ? {
              ...word,
              isCorrect: false,
              noOfAttempts: R.add(word.noOfAttempts, 1),
              points: R.add(word.points, 0),
            }
          : word
      ),
    }),
    true
  );
};

const reset = () => setState((_state) => INIT_STATE, true);

// const {getState, setState} = store; ==> without descontructing and below descontructing
const { getState, setState } = createStore<State>(() => INIT_STATE);

const Store = {
  getState,
  setState,
  getWords,
  setAnswerToCorrect,
  setAnswerToWrong,
  INIT_STATE,
  reset,
  loadLevel,
  level1,
  level2,
};

export default Store;
