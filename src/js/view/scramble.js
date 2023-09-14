import Utils from "./../utils";
import Store from "./../store";

const scoreDOM = Utils.qs(".score");
const wordsDOM = Utils.qs(".words");

const render = () => {
  // try & catch used when we are out of words
  const words = Store.getWords();
  try {
    const word = words
      .find((word) => [false, null].includes(word.hasCorrectAnswer))
      .word.split("");
    wordsDOM.textContent = Utils.shuffleArray(word).join("");
  } catch (e) {
    //TODO: create message when user answered corrected all words like: you won congrats ! or similar
    throw new Error("🎉 CONGRATULATIONS YOU FINISH THE GAME!");
  } finally {
    scoreDOM.textContent = `${Utils.getNoOfCorrectAnswers()} / ${words.length}`;
  }
};

const ViewScramble = { render };

export default ViewScramble;
