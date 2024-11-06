import { combineReducer } from 'redex';
import { questionReducer } from './questionReducer.js';

export const rootReducer = combineReducer({
  question: questionReducer,
});
