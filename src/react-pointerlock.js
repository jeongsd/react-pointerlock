import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
};

const defaultProps = {
};


class PointerLocker extends Component {

  render() {
    return (
      <div className="PointerLocker">
        { this.props.children }
      </div>
    );
  }

}

PointerLocker.propTypes = propTypes;
PointerLocker.defaultProps = defaultProps;


export default PointerLocker;
