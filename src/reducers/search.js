import { handleActions } from 'redux-actions';
import { searchRequest, searchSuccess, searchFailure } from '../actions/search';

const initialState = {
  isFetching: false,
  result: [],
  error: null,
};

export default handleActions(
  {
    [searchRequest]: state => ({ ...state, isFetching: true }),

    [searchSuccess]: (state, action) => ({
      ...state,
      result: action.payload,
      isFetching: false,
    }),

    [searchFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error,
    }),
  },
  initialState,
);
