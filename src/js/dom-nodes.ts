import Utils from "./utils";

const inputWordDOM = Utils.qs(".input-word");
const resultDOM = Utils.qs(".result");
const btnTryDOM = Utils.qs(".btn-try");
const btnResetDOM = Utils.qs(".btn-reset");
const btnHintDOM = Utils.qs(".btn-hint");
const hintWordDOM = Utils.qs(".hint-word");
const btnLevel2DOM = Utils.qs(".btn-level-2");

const scoreDOM = Utils.qs(".score");
const wordsDOM = Utils.qs(".words");
const pointsDOM = Utils.qs(".points");

export {
  inputWordDOM,
  resultDOM,
  btnTryDOM,
  btnResetDOM,
  btnHintDOM,
  hintWordDOM,
  scoreDOM,
  wordsDOM,
  pointsDOM,
  btnLevel2DOM,
};
