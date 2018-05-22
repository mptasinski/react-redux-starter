import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'containers/App';

ReactDOM.render((
  <AppContainer>
    <App/>
  </AppContainer>
), document.getElementById('react-app'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const App = require('containers/App').default; //eslint-disable-line
    ReactDOM.render((
      <AppContainer>
        <App/>
      </AppContainer>
    ), document.getElementById('react-app'));
  });
}
