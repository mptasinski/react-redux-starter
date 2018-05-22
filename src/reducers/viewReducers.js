import assignment from 'assignment';
import deepFreze from 'deep-freeze';

import {
  viewDefaultViewState
} from 'store/initialStore';

const setView = (state, action) => {
  deepFreze(state);
  let newValue = {};
  switch (action.state) {
  case 'open':
  case 'show':
    newValue.searchModalShow = true;
    break;
  case 'close':
  case 'hide':
    newValue.searchModalShow = false;
    break;
  default:
    newValue.searchModalShow = !state.searchModalShow;
    break;
  }
  return assignment({}, state, newValue);
};

const unsetView = (state, action) => {
  deepFreze(state);
  return assignment({}, state, {
    username: action.state || ''
  });
};

export default (state = defaultViewState, action) => {

  const payload = {
    SET_VIEW: setView,
    UNSET_VIEW: unsetView
  };

  return (payload[action.type] || (() => state))(state, action);
};
