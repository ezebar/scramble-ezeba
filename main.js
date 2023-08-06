import Utils from "./utils";
// Command + Shift + L => select all same words
// DOM
// DATA

//1) Practice with this code (rewrite it yourself)
//2) Fix the bug where hitting "next" for the 5th time produces an error in the console.
// 3) See if you can make it in such a way that when 
//<button class="btn-try">Try it!</button> is clicked and the user guesses correctly, 
//they immediately get a new word displayed :))


//1. Rename variables & simplify


const scoresDOM = Utils.qs('.score');
const btnTryDOM = Utils.qs('.btn-try');
const btnNextDOM = Utils.qs('.btn-next');
const resultDOM = Utils.qs('.result');
const wordsDOM = Utils.qs('.words');
const inputWordDOM = Utils.qs('.input-word');
const btnResetDOM = Utils.qs('.btn-reset');

const words = ['done','should', 'ready','there','long'];

let index = 0;
let scoreIndex = 0;

//2. VIEW | Simplify code 
const viewScramble = () => {
const word = words[index];
const letters = word.split(""); 

scoresDOM.textContent = `${scoreIndex} / ${words.length}`;
// Remeber to add Utils module before function!
wordsDOM.textContent = Utils.shuffleArray(letters).join("");

btnTryDOM.addEventListener('click', () => {
  const inputWord = inputWordDOM.value;
  const isAnagram = function(word, inputWord) {
 if (index, scoreIndex != words.length) {
   if (word.toLowerCase() === inputWord.toLowerCase()) {
    scoresDOM.textContent = `${scoreIndex +1} / ${words.length}`;
    resultDOM.textContent = 'Correct 👏' ;
    scoreIndex+= 1;
    if (index < words.length -1) {
        index++;
        viewScramble();
        }
  } else {
    scoresDOM.textContent = `${scoreIndex} / ${words.length}`;
    resultDOM.textContent = '🫤 Incorrect, 🔄 please   try again';
  } 
}
};
  isAnagram(word,inputWord);
})
}

// btnNextDOM.addEventListener('click', () => {
//  if (index < words.length -1) {
//   index++;
//   viewScramble();
//    }
// })

// viewScramble();

// Reset App
const initApp = () => {
  index, scoreIndex = 0;
  inputWordDOM.value = '';
  viewScramble();
  }
btnResetDOM.addEventListener('click', () => {
  initApp();
});

initApp();

