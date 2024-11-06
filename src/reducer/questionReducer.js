import { Prev_Question, Next_Question } from '../actions/actionTypes.js';

const initialState = {
  question: 0,
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Prev_Question:
      if (state.question >= 0)
        return {
          ...state,
          question: state.question + 1,
        };

    case Next_Question:
      return {
        ...state,
        question: state.question - 1,
      };
  }
};
