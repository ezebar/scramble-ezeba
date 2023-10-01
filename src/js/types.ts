export type Word = {
  id: number;
  word: string;
  isCorrect: null | boolean;
  noOfAttempts: number;
  hint: string;
  points: number;
};

export type Words = Word[];

export type State = {
  words: Words;
};
