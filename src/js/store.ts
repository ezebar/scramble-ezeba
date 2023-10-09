import { createStore } from "zustand/vanilla";
import * as R from "ramda";
import { State } from "./types";
import DataLevels from "./data/levels";
import DataUsers from "./data/users";

let INIT_STATE = {
  levels: DataLevels.levels,
  users: DataUsers.users,
};

//TODO: add level 2 dinamically pending
const getLevels = () => getState().levels;
const getUsers = () => getState().users;

//state.levels.find(id => id === 1)
const getWords = (levelId = 1) =>
  getLevels().find(({ id }) => id === levelId)?.words || []; // map, find and other methods can loop over empty array

//TODO: check how word getUsers
const getUserNames = (userId = 1) => {
  return getUsers().find((user) => user.id === userId);
};

// console.log(DataUsers.users[0].name);

const setAnswerToCorrect = (id: number) =>
  setState(
    (state) => ({
      ...state,
      words: getWords().map((word) =>
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
      words: getWords().map((word) =>
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
  getLevels,
  getUsers,
};

export default Store;
