import Utils from "./../utils";
import Store from "./../store";

const scoreDOM = Utils.qs(".score");
const wordsDOM = Utils.qs(".words");
const pointsDOM = Utils.qs(".points");
const hintWordDOM = Utils.qs(".hint-word");

const render = () => {
  // try & catch used when we are out of words
  try {
    //If .find() returns undefined (which means all words have been answered correctly), .word will throw TypeError: Cannot read properties of undefined (reading 'word').
    const word = Utils.getHasCorrectAnswer().word.split("");
    wordsDOM.textContent = Utils.shuffleArray(word).join("");
  } catch (e) {
    //TODO: create message when user answered corrected all words like: you won congrats ! or similar
    wordsDOM.textContent = `🏆 Round finished!`;
    console.error(e);
  } finally {
    // TODO: hint change for every word
    pointsDOM.textContent = `${Utils.sumPoints()}`;
    scoreDOM.textContent = `${Utils.getNoOfCorrectAnswers()} / ${Utils.getNoOfWords()}`;
  }
};

const ViewScramble = { render };

export default ViewScramble;
