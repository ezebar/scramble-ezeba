import Utils from "../utils";
import {
  btnTryDOM,
  btnResetDOM,
  btnHintDOM,
  wordsDOM,
  pointsDOM,
  scoreDOM,
  btnLevel2DOM,
} from "../dom-nodes";

const render = () => {
  try {
    // This may return an error and that's why we are catching it. ;)
    const word = Utils.getCurrentWord().word.split("");
    wordsDOM.textContent = Utils.shuffleArray(word).join("");
    btnLevel2DOM.classList.remove("btn-hidden");
  } catch (e) {
    wordsDOM.textContent = `🏆 Round finished!`;
    btnTryDOM.classList.add("disabled");
    btnHintDOM.classList.add("disabled");
    btnResetDOM.classList.remove("btn-hidden");
    // btnLevel2DOM.classList.remove("btn-hidden");
  } finally {
    pointsDOM.textContent = `${Utils.sumPoints()}`;
    scoreDOM.textContent = `${Utils.sumCorrectAnswers()} / ${Utils.sumWords()}`;
  }
};

const ViewScramble = { render };

export default ViewScramble;
