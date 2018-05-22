import React, {Component} from 'react';
import {Provider} from 'react-redux';

import configureStore from 'store/configureStore';

import 'styles/main.scss';

export default class App extends Component {

  componentWillMount() {

    this.store = configureStore();

  }

  render() {
    return (
      <Provider store={this.store}>
        <Hello username={"Generale Kenobi"} />
      </Provider>
    );
  }
}
