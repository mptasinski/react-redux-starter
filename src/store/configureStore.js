import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from 'reducers';

const composeEnhancers = composeWithDevTools({
  // TODO after api connection will add applyMiddleware with thunk and hashHistory
});

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers());
};

export default configureStore;
