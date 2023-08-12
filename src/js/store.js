import { createStore } from "zustand/vanilla";

// const {getState, setState} = store; ==> without descontructing and below descontructing
const { getState, setState } = createStore(() => ({
  words: ["done", "should", "there", "ready", "long"],
  index: 0,
  scoreIndex: 0,
}));

const Store = { getState, setState };

export default Store;