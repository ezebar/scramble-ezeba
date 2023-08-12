import Utils from "./../utils";
import Store from "./../store";

const scoreDOM = Utils.qs(".score");
const wordsDOM = Utils.qs(".words");

const render = () => {
  const { words, index, scoreIndex } = Store.getState();
  const word = words[index].split("");
  scoreDOM.textContent = `${scoreIndex} / ${words.length}`;
  wordsDOM.textContent = Utils.shuffleArray(word).join("");
};

const ViewScramble = { render };

export default ViewScramble;