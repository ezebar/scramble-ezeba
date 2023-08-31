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
    // const { words, index } = Store.getState();
    const words = Store.getWords();
    const index = Store.getIndex();
    const { id, word } = words[index];
    // console.log({ id, word });
    const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
    if (noOfCorrectAnswers != words.length) {
      const inputWord = inputWordDOM.value;
      hintWordDOM.textContent = "";
      if (Utils.isAnagram(word, inputWord)) {
        Store.setHasCorrectAnswer(id);
        const hasCorrectAnswer = Utils.getHasCorrectAnswerByWordIndex();
        const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
        const AttemptsAnswers = Utils.getnoOfAttemptsbyIndex();
        const noOfAttemptsAnswers = Utils.getNoOfAttempts();
        scoreDOM.textContent = `${noOfCorrectAnswers} / ${words.length}`;
        inputWordDOM.value = "";
        resultDOM.textContent = `🎉 Correct 👏👏👏  ${hasCorrectAnswer} | Attempts: ${noOfAttemptsAnswers}`;
        // scoresDOM.textContent = `${scoreIndex + 1} / ${words.length}`;
        if (index < words.length - 1) {
          Store.setIndex();
          ViewScramble.render();
        }
      } else {
        Store.setHasCorrectAnswerFalseAndIncrNoOfAttemps(id);
        const hasCorrectAnswer = Utils.getHasCorrectAnswerByWordIndex();
        const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
        const AttemptsAnswers = Utils.getnoOfAttemptsbyIndex();
        const noOfAttemptsAnswers = Utils.getNoOfAttempts();
        scoreDOM.textContent = `${noOfCorrectAnswers} / ${words.length}`;
        inputWordDOM.value = "";
        resultDOM.textContent = `Incorrect, try again❗️${hasCorrectAnswer} | Attempts: ${noOfAttemptsAnswers}`;
      }
    }
  });

  btnResetDOM.addEventListener("click", () => {
    // const { words, index } = Store.getState();
    Store.reset();
    resultDOM.textContent = "";
    hintWordDOM.textContent = "";
    ViewScramble.render();
  });

  btnHintDOM.addEventListener("click", () => {
    const words = Store.getWords();
    const index = Store.getIndex();
    const { id, word } = words[index];
    const hintWord = words[index].hint;
    hintWordDOM.textContent = `Hint: "${hintWord}"`;
    Store.setHasCorrectAnswerFalseAndIncrNoOfAttemps(id);
    const AttemptsAnswers = Utils.getnoOfAttemptsbyIndex();
    const noOfAttemptsAnswers = Utils.getNoOfAttempts();
    inputWordDOM.value = "";
    resultDOM.textContent = `Attempts: ${noOfAttemptsAnswers}`;
  });

  ViewScramble.render();
};
initApp();
