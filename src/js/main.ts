import "../css/style.css";
import Utils from "./utils";
import Store from "./store";
import ViewScramble from "./view/scramble";
import {
  inputWordDOM,
  resultDOM,
  btnTryDOM,
  btnResetDOM,
  btnHintDOM,
  hintWordDOM,
  btnLevel2DOM,
} from "./dom-nodes";

const initApp = () => {
  btnTryDOM.addEventListener("click", () => {
    const { id, word } = Utils.getCurrentWord();
    const inputWord = inputWordDOM.value;
    hintWordDOM.textContent = "";
    inputWordDOM.value = "";

    if (Utils.isAnagram(word, inputWord)) {
      Store.setAnswerToCorrect(id);
      resultDOM.textContent = `🎉 Correct 👏👏👏  | Attempts: ${Utils.sumAttempts()}`;
      ViewScramble.render();
    } else {
      Store.setAnswerToWrong(id);
      resultDOM.textContent = `Incorrect, try again❗️| Attempts: ${Utils.sumAttempts()}`;
    }
  });

  btnResetDOM.addEventListener("click", () => {
    Store.reset();
    ViewScramble.render();

    btnTryDOM.classList.remove("disabled");
    btnHintDOM.classList.remove("disabled");
    btnResetDOM.classList.add("btn-hidden");
    btnLevel2DOM.classList.add("btn-hidden");

    resultDOM.textContent = "";
    hintWordDOM.textContent = "";
  });

  btnHintDOM.addEventListener("click", () => {
    const { id, hint } = Utils.getCurrentWord();
    const sumAttempts = Utils.sumAttempts();

    resultDOM.textContent = `Attempts: ${sumAttempts}`;
    hintWordDOM.textContent = `Hint: "${hint}"`;
    inputWordDOM.value = "";

    Store.setAnswerToWrong(id);
  });

  //TODO: btn level 2 work. Not working so far.
  btnLevel2DOM.addEventListener("click", () => {
    Store.loadLevel(Store.level2);
  });

  ViewScramble.render();
};
initApp();
