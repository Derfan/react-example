import { show } from '../api';
import { showsRequest, showsSuccess, showsFailure } from '../actions/shows';

export default store => next => action => {
  const result = next(action);

  if (action.type === showsRequest.toString()) {
    show(action.payload)
      .then(data => store.dispatch(showsSuccess(data)))
      .catch(error => store.dispatch(showsFailure(error)));
  }

  return result;
};
