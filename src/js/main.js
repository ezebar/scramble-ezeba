import "../css/style.css";
import Utils from "./utils";
import Store from "./store";
import ViewScramble from "./view/scramble";

const scoreDOM = Utils.qs(".score");
const inputWordDOM = Utils.qs(".input-word");
const btnTryDOM = Utils.qs(".btn-try");
const resultDOM = Utils.qs(".result");
const btnResetDOM = Utils.qs(".btn-reset");
const btnHintDOM = Utils.qs(".btn-hint");
const hintWordDOM = Utils.qs(".hint-word");

const initApp = () => {
  btnTryDOM.addEventListener("click", () => {
    const words = Store.getWords();
    const index = Store.getIndex();
    // TODO: function to check if last element in array hasCorrectAnswer === true. Tried reverse() method too but it change everytime click btnTry
    try {
      const { id, word } = words.find((word) =>
        [false, null].includes(word.hasCorrectAnswer)
      );
      const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
      if (noOfCorrectAnswers != words.length) {
        const inputWord = inputWordDOM.value;
        hintWordDOM.textContent = "";
        if (Utils.isAnagram(word, inputWord)) {
          Store.setHasCorrectAnswer(id);
          const hasCorrectAnswer = Utils.getHasCorrectAnswerByWordIndex();
          const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
          const sumAttempts = Utils.sumAttempts();
          scoreDOM.textContent = `${noOfCorrectAnswers} / ${words.length}`;
          inputWordDOM.value = "";
          resultDOM.textContent = `🎉 Correct 👏👏👏  ${hasCorrectAnswer} | Attempts: ${sumAttempts}`;
          if (index < words.length - 1) {
            Store.setIndex();
            ViewScramble.render();
          }
        } else {
          Store.setHasCorrectAnswerFalseAndIncrNoOfAttemps(id);
          const hasCorrectAnswer = Utils.getHasCorrectAnswerByWordIndex();
          const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
          const sumAttempts = Utils.sumAttempts();
          scoreDOM.textContent = `${noOfCorrectAnswers} / ${words.length}`;
          inputWordDOM.value = "";
          resultDOM.textContent = `Incorrect, try again❗️${hasCorrectAnswer} | Attempts: ${sumAttempts}`;
        }
      }
    } catch (e) {
      throw new Error("🎉 CONGRATULATIONS YOU FINISH THE GAME!");
    }
  });

  btnResetDOM.addEventListener("click", () => {
    Store.reset();
    resultDOM.textContent = "";
    hintWordDOM.textContent = "";
    ViewScramble.render();
  });

  btnHintDOM.addEventListener("click", () => {
    const words = Store.getWords();
    const index = Store.getIndex();
    const { id, word, hint } = words[index];
    hintWordDOM.textContent = `Hint: "${hint}"`;
    Store.setHasCorrectAnswerFalseAndIncrNoOfAttemps(id);
    const sumAttempts = Utils.sumAttempts();
    inputWordDOM.value = "";
    resultDOM.textContent = `Attempts: ${sumAttempts}`;
  });

  ViewScramble.render();
};
initApp();
