import Utils from "./../utils";
import Store from "./../store";

const scoreDOM = Utils.qs(".score");
const wordsDOM = Utils.qs(".words");

const render = () => {
  const words = Store.getWords();
  const index = Store.getIndex();
  // const { words, index } = Store.getState();
  const word = words[index].word.split("");
  scoreDOM.textContent = `${Utils.getNoOfCorrectAnswers()} / ${words.length}`;
  wordsDOM.textContent = Utils.shuffleArray(word).join("");
};

const ViewScramble = { render };

export default ViewScramble;
