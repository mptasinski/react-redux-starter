import assignment from 'assignment';
import deepFreze from 'deep-freeze';

import {
  actionsDefaultViewState
} from 'store/initialStore';

const actionOne = (state, action) => {
  return action.state || [];
};

const actionTwo = (state, action) => {
  deepFreze(state);
  let newValue = {};
  if (state.openFilter === action.state) {
    newValue.openFilter = '';
  } else {
    newValue.openFilter = action.state;
  }
  return assignment({}, state, newValue);
};

export default (state = defaultViewState, action) => {

  const payload = {
    ACTION_1: actionOne,
    ACTION_2: actionTwo
  };

  return (payload[action.type] || (() => state))(state, action);
};
