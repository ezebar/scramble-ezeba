import "../css/style.css";
import Utils from "./utils";
import Store  from "./store";
import ViewScramble from "./view/scramble";

const scoreDOM = Utils.qs(".score");
const inputWordDOM = Utils.qs(".input-word");
const btnTryDOM = Utils.qs(".btn-try");
const btnResetDOM = Utils.qs(".btn-reset");
const resultDOM = Utils.qs(".result");

const initApp = () => {
  btnTryDOM.addEventListener("click", () => {
    const { words, index, scoreIndex } = Store.getState();
    const word = words[index];
    const inputWord = inputWordDOM.value;

    if (scoreIndex != words.length) {
      if (Utils.isAnagram(word, inputWord)) {
        Store.setState(
          (state) => ({ ...state, scoreIndex: state.scoreIndex + 1 }),
          true
        );
        resultDOM.textContent = "🎉 Correct 👏👏👏";
        scoreDOM.textContent = `${scoreIndex + 1} / ${words.length}`;
        inputWordDOM.value = "";
      } else {
        resultDOM.textContent = "Incorrect, try again ❗️";
        inputWordDOM.value = "";
      }
      if (index < words.length - 1) {
        Store.setState((state) => ({ ...state, index: state.index + 1 }), true);
        ViewScramble.render();
      }
    }
  });
  btnResetDOM.addEventListener("click", () => {
    const { words, index, scoreIndex } = Store.getState();
    Store.setState(
      (state) => ({...state, words: state.words,index: state.index * 0,scoreIndex: state.scoreIndex * 0,}),true);
      ViewScramble.render();
  });
  ViewScramble.render();
};
initApp();
