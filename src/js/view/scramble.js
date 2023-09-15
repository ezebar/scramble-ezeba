import Utils from "./../utils";
import Store from "./../store";

const scoreDOM = Utils.qs(".score");
const wordsDOM = Utils.qs(".words");

const render = () => {
  // try & catch used when we are out of words
  const words = Store.getWords();
  try {
    //If .find() returns undefined (which means all words have been answered correctly), .word will throw TypeError: Cannot read properties of undefined (reading 'word').
    const word = words
      .find((word) => [false, null].includes(word.hasCorrectAnswer))
      .word.split("");
    wordsDOM.textContent = Utils.shuffleArray(word).join("");
  } catch (e) {
    //TODO: create message when user answered corrected all words like: you won congrats ! or similar
    wordsDOM.textContent = "Congrats No more words!";
    console.error(e);
  } finally {
    scoreDOM.textContent = `${Utils.getNoOfCorrectAnswers()} / ${words.length}`;
  }
};

const ViewScramble = { render };

export default ViewScramble;
