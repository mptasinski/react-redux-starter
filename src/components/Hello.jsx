import React, { Component } from 'react';
import 'styles/components/job-alert.scss';

export default class Hello extends Component {

  static propTypes = {
    username: PropTypes.string
  }

  static defaultProps = {
    username: ''
  };

  render() {
    const {username} = this.props;
    return (
      <div className="hello">
        <div className="hello__there">
          <h1 className="hello_there--generale-kenobi">Hello there, {username}</h1>
        </div>
      </div>
    );
  }
}
