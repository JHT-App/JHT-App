import { Prev_Question, Next_Question } from './actionTypes.js';

export const preQuestion = () => ({
  type: Prev_Question,
});

export const nextQuestion = () => ({
  type: Next_Question,
});
