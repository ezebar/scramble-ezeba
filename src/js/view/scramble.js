import Utils from "./../utils";
import Store from "./../store";

const scoreDOM = Utils.qs(".score");
const wordsDOM = Utils.qs(".words");
const pointsDOM = Utils.qs(".points");
const btnTryDOM = Utils.qs(".btn-try");
const btnResetDOM = Utils.qs(".btn-reset");
const btnHintDOM = Utils.qs(".btn-hint");

const render = () => {
  try {
    const word = Utils.getCurrentWord().word.split("");
    wordsDOM.textContent = Utils.shuffleArray(word).join("");
  } catch (e) {
    wordsDOM.textContent = `🏆 Round finished!`;
    btnTryDOM.classList.add("disabled");
    btnHintDOM.classList.add("disabled");
    btnResetDOM.classList.remove("btn-hidden");
    //TODO: add a button to start a new round & disable other buttons like "Try it!" and others. -> DONE
  } finally {
    pointsDOM.textContent = `${Utils.sumPoints()}`;
    scoreDOM.textContent = `${Utils.sumCorrectAnswers()} / ${Utils.sumWords()}`;
  }
};

const ViewScramble = { render };

export default ViewScramble;
