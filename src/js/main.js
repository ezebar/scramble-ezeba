import "../css/style.css";
import Utils from "./utils";
import Store from "./store";
import ViewScramble from "./view/scramble";

// const scoreDOM = Utils.qs(".score");
const inputWordDOM = Utils.qs(".input-word");
const btnTryDOM = Utils.qs(".btn-try");
const resultDOM = Utils.qs(".result");
const btnResetDOM = Utils.qs(".btn-reset");
const btnHintDOM = Utils.qs(".btn-hint");
const hintWordDOM = Utils.qs(".hint-word");

const initApp = () => {
  btnTryDOM.addEventListener("click", () => {
    const { id, word } = Utils.getCurrentWord();
    const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
    const inputWord = inputWordDOM.value;
    hintWordDOM.textContent = "";
    if (Utils.isAnagram(word, inputWord)) {
      Store.setAnswerToCorrect(id);
      const hasCorrectAnswer = Utils.getHasCorrectAnswerBoolean();
      const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
      const sumAttempts = Utils.sumAttempts();
      inputWordDOM.value = "";
      resultDOM.textContent = `🎉 Correct 👏👏👏  ${hasCorrectAnswer} | Attempts: ${sumAttempts}`;
      ViewScramble.render();
    } else {
      Store.setAnswerToWrong(id);
      const hasCorrectAnswer = Utils.getHasCorrectAnswerBoolean();
      const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
      const sumAttempts = Utils.sumAttempts();
      inputWordDOM.value = "";
      resultDOM.textContent = `Incorrect, try again❗️${hasCorrectAnswer} | Attempts: ${sumAttempts}`;
    }
  });

  btnResetDOM.addEventListener("click", () => {
    Store.reset();
    resultDOM.textContent = "";
    hintWordDOM.textContent = "";
    ViewScramble.render();
  });

  // TODO: hint change for every word. -> DONE
  btnHintDOM.addEventListener("click", () => {
    const { id, hint } = Utils.getCurrentWord();
    hintWordDOM.textContent = `Hint: "${hint}"`;
    Store.setAnswerToWrong(id);
    const sumAttempts = Utils.sumAttempts();
    resultDOM.textContent = `Attempts: ${sumAttempts}`;
    inputWordDOM.value = "";
  });
  ViewScramble.render();
};
initApp();
