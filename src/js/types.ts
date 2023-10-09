export type Word = {
  id: number;
  word: string;
  isCorrect: null | boolean;
  noOfAttempts: number;
  hint: string;
  points: number;
};

export type Words = Word[];

export type Level = {
  id: number;
  words: Words;
};

export type Levels = Level[];

export type User = {
  id: number;
  name: string;
};

export type Users = User[];

export type State = {
  levels: Levels;
  users: Users;
};

//TODO: add users. Create type for users, create INIT_USERS that will go into INIT_STATE
// Create users module with at least one function getUserById
