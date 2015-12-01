import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import PointerLock from 'react-pointerlock';

const propTypes = {
};

const defaultProps = {
};


class App extends Component {

  render() {
    return (
      <div className="app">
        <PointerLock>
          hello world
        </PointerLock>
      </div>
    );
  }

}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
