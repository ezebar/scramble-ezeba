import "../css/style.css";
import Utils from "./utils";
import Store from "./store";
import ViewScramble from "./view/scramble";

const scoreDOM = Utils.qs(".score");
const inputWordDOM = Utils.qs(".input-word");
const btnTryDOM = Utils.qs(".btn-try");
const btnResetDOM = Utils.qs(".btn-reset");
const resultDOM = Utils.qs(".result");


const initApp = () => {
  btnTryDOM.addEventListener("click", () => {
    const { words, index } = Store.getState();
    const { id, word } = words[index];
    // console.log({ id, word });
    const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
  if (noOfCorrectAnswers != words.length) {
    const inputWord = inputWordDOM.value;
    if (Utils.isAnagram(word, inputWord)) {
      Store.setState(
        (state) => ({
          ...state,
          // scoreIndex: state.scoreIndex + 1
          words: state.words.map((word) =>
            word.id === id ? { ...word, hasCorrectAnswer: true} : word
          ),
        }),
        true
      );  
      const hasCorrectAnswer = Utils.getHasCorrectAnswerByWordIndex();
      const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
      const AttemptsAnswers = Utils.getnoOfAttemptsbyIndex();
      const noOfAttemptsAnswers = Utils.getNoOfAttempts();
      scoreDOM.textContent = `${noOfCorrectAnswers} / ${words.length}`;
      inputWordDOM.value = "";
      resultDOM.textContent = `🎉 Correct 👏👏👏  ${hasCorrectAnswer} | Attempts: ${noOfAttemptsAnswers}`;
      // scoresDOM.textContent = `${scoreIndex + 1} / ${words.length}`;
        if (index < words.length - 1) {
          Store.setState((state) => ({ ...state, index: state.index + 1 }), true);
          ViewScramble.render();
        }
    } else {
      Store.setState((state) => ({
        ...state,
        words: state.words.map((word) =>
          word.id === id ? { ...word, hasCorrectAnswer: false, noOfAttempts: word.noOfAttempts +1} : word 
        ),
      }));
    const hasCorrectAnswer = Utils.getHasCorrectAnswerByWordIndex();
    const noOfCorrectAnswers = Utils.getNoOfCorrectAnswers();
    const AttemptsAnswers = Utils.getnoOfAttemptsbyIndex();
    const noOfAttemptsAnswers = Utils.getNoOfAttempts();
      scoreDOM.textContent = `${noOfCorrectAnswers} / ${words.length}`;
      inputWordDOM.value = "";
      console.log(noOfAttemptsAnswers);
      resultDOM.textContent = `Incorrect, try again❗️${hasCorrectAnswer} | Attempts: ${noOfAttemptsAnswers}`;
  }
}
  });

  btnResetDOM.addEventListener("click", () => {
    const { words, index } = Store.getState();
    Store.setState(
      (state) => ({...state, 
        index: state.index * 0,
        words: state.words.map((word) => ({...word, noOfAttempts: word.noOfAttempts * 0, hasCorrectAnswer: null})),  
        // scoreIndex: state.scoreIndex * 0,
    })
        ,true);
        resultDOM.textContent = '';
        ViewScramble.render();
    });
    ViewScramble.render();
};
initApp();

