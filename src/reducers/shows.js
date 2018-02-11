import { handleActions } from 'redux-actions';
import { showsRequest, showsSuccess, showsFailure } from '../actions/shows';

const initialState = {
  entities: [],
  isFetching: true,
  error: null,
};

export default handleActions(
  {
    [showsRequest]: state => ({ ...state, isFetching: true }),

    [showsSuccess]: (state, action) => ({
      ...state,
      entities: [...state.entities, action.payload],
      isFetching: false,
    }),

    [showsFailure]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error,
    }),
  },
  initialState,
);
