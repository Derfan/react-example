import { createActions } from 'redux-actions';

export const { showsRequest, showsSuccess, showsFailure } = createActions({
  SHOWS_REQUEST: undefined,
  SHOWS_SUCCESS: undefined,
  SHOWS_FAILURE: undefined,
});
