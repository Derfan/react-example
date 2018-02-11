import { createActions } from 'redux-actions';

// export const searchRequest = createAction('SEARCH_REQUEST');
// export const searchSuccess = createAction('SEARCH_SUCCESS');
// export const searchFailure = createAction('SEARCH_FAILURE');

export const { searchRequest, searchSuccess, searchFailure } = createActions({
  SEARCH_REQUEST: undefined,
  SEARCH_SUCCESS: undefined,
  SEARCH_FAILURE: undefined,
});

// searchRequest('abc'); -> {type: "SEARCH_REQUEST", payload: "abc"}
