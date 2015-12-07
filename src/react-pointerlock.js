import React from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';
import { POINTERLOCK_ELEMENT, POINTERLOCK_CHANGE,
  REQUEST_POINTERLOCK, EXIT_POINTERLOCK, POINTERLOCK_ERROR,
  MOVEMENT_X, MOVEMENT_Y } from './helper/pointLock.js';
// import './react-pointerlock.css';

const propTypes = {
  className: React.PropTypes.string,
  onMouseMove: React.PropTypes.func,
  blockElement: React.PropTypes.node,
  // onError: PropTypes.func,
};

const defaultProps = {
  blockElement: (
    <div className="PointerLocker-blocker">
      <div className="PointerLocker-instructions">
        Click to View
      </div>
    </div>
  ),
};

class PointerLocker extends React.Component {

  constructor() {
    super();

    this.state = {
      isPointLock: false,
    };

    this.requestPointerLock = this.requestPointerLock.bind(this);
    this.onPointLockChange = this.onPointLockChange.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onPointLockError = this.onPointLockError.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    if (this.caniuse()) {
      document.addEventListener(POINTERLOCK_CHANGE, this.onPointLockChange, false);
      // document.addEventListener(POINTERLOCK_ERROR, this.onPointLockError, false);
    }
  }

  componentWillUnmount() {
    if (this.caniuse()) {
      document.removeEventListener(POINTERLOCK_CHANGE, this.onPointLockChange, false);
      // document.removeEventListener(POINTERLOCK_ERROR, this.onPointLockError, false);
    }
  }

  onPointLockChange() {
    const currentPointLockElement = document[POINTERLOCK_ELEMENT];
    const pointLockElement = ReactDom.findDOMNode(this.refs.pointerLocker);

    if (currentPointLockElement === pointLockElement) {
      // react onMouseMove event doesn't extension to mouse events
      // https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API#extensions
      document.addEventListener('mousemove', this.onMouseMove, false);
      return this.setState({
        isPointLock: true,
      });
    }

    document.removeEventListener('mousemove', this.onMouseMove);
    this.setState({
      isPointLock: false,
    });
  }

  onClick() {
    this.requestPointerLock();
  }

  onMouseMove(event) {
    if (this.props.onMouseMove) {
      const movement = {
        x: event[MOVEMENT_X] || 0,
        y: event[MOVEMENT_Y] || 0,
      };

      this.props.onMouseMove(movement, event);
    }
  }

  onPointLockError(error) {
    console.error('requestPointerLock or exitPointerLock calling failed', error);

    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  exitPointLock() {
    document[EXIT_POINTERLOCK]();
  }

  requestPointerLock() {
    const pointerLocker = ReactDom.findDOMNode(this.refs.pointerLocker);

    pointerLocker[REQUEST_POINTERLOCK]();
  }

  caniuse() {
    if (POINTERLOCK_ELEMENT) {
      return true;
    }

    return false;
  }

  render() {
    const className = classnames('PointerLocker', this.props.className);
    let blocker;

    if (!this.state.isPointLock) {
      blocker = this.props.blockElement;
    }

    console.log();

    return (
      <div
        ref="pointerLocker"
        className={ className }
        onMouseMove={
          this.state.isPointLock ? this.onMouseMove : null
        }
        onClick={ this.requestPointerLock } >
        { blocker }
        { this.props.children }
      </div>
    );
  }

}

PointerLocker.propTypes = propTypes;
PointerLocker.defaultProps = defaultProps;


export default PointerLocker;
