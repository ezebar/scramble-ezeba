import "../css/style.css";
import Utils from "./utils";
import Store from "./store";
import ViewScramble from "./view/scramble";

const inputWordDOM = Utils.qs(".input-word");
const resultDOM = Utils.qs(".result");
const btnTryDOM = Utils.qs(".btn-try");
const btnResetDOM = Utils.qs(".btn-reset");
const btnHintDOM = Utils.qs(".btn-hint");
const hintWordDOM = Utils.qs(".hint-word");

const initApp = () => {
  btnTryDOM.addEventListener("click", () => {
    const { id, word } = Utils.getCurrentWord();
    const inputWord = inputWordDOM.value;
    // No sure why "sumAttempts" moved here it doesn't "sumAttempts" in the if else statement. I need to repeat 2 times "sumAttempts" in the if else in order to work.
    // const sumAttempts = Utils.sumAttempts();
    hintWordDOM.textContent = "";
    inputWordDOM.value = "";

    if (Utils.isAnagram(word, inputWord)) {
      Store.setAnswerToCorrect(id);
      const sumAttempts = Utils.sumAttempts();
      const isCorrect = Utils.getIsCorrect();
      resultDOM.textContent = `🎉 Correct 👏👏👏  ${isCorrect} | Attempts: ${sumAttempts}`;
      ViewScramble.render();
    } else {
      Store.setAnswerToWrong(id);
      const sumAttempts = Utils.sumAttempts();
      const isCorrect = Utils.getIsCorrect();
      resultDOM.textContent = `Incorrect, try again❗️${isCorrect} | Attempts: ${sumAttempts}`;
    }
  });

  btnResetDOM.addEventListener("click", () => {
    Store.reset();
    ViewScramble.render();

    btnTryDOM.classList.remove("disabled");
    btnHintDOM.classList.remove("disabled");
    btnResetDOM.classList.add("btn-hidden");

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
  ViewScramble.render();
};
initApp();
