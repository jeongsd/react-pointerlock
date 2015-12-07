(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react/lib/ReactDOM')) :
	typeof define === 'function' && define.amd ? define(['react', 'react/lib/ReactDOM'], factory) :
	global.PointerLocker = factory(global.React,global.require$$0);
}(this, function (React,require$$0) { 'use strict';

	React = 'default' in React ? React['default'] : React;
	require$$0 = 'default' in require$$0 ? require$$0['default'] : require$$0;

	var babelHelpers = {};

	babelHelpers.typeof = function (obj) {
	  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	babelHelpers.classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	babelHelpers.createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	babelHelpers.inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	babelHelpers.possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	babelHelpers;
	var index$1 = (function (module) {
	var exports = module.exports;
	/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = ({}).hasOwnProperty;

		function classNames() {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : babelHelpers.typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (typeof define === 'function' && babelHelpers.typeof(define.amd) === 'object' && define.amd) {
			// register as 'classnames', consistent with npm package name
			define('classnames', [], function () {
				return classNames;
			});
		} else {
			window.classNames = classNames;
		}
	})();
	return module.exports;
	})({exports:{}});

	var pointerLockElement = undefined;
	var pointerLockChange = undefined;
	var requestPointerLock = undefined;
	var exitPointerLock = undefined;
	var pointerLockError = undefined;
	var movementX = undefined;
	var movementY = undefined;

	if ('pointerLockElement' in document) {
	  pointerLockElement = 'pointerLockElement';
	  pointerLockChange = 'pointerlockchange';
	  requestPointerLock = 'requestPointerLock';
	  exitPointerLock = 'exitPointerLock';
	  pointerLockError = 'pointerlockerror';
	  movementX = 'movementX';
	  movementY = 'movementY';
	} else if ('mozPointerLockElement' in document) {
	  pointerLockElement = 'mozPointerLockElement';
	  pointerLockChange = 'mozpointerlockchange';
	  requestPointerLock = 'mozRequestPointerLock';
	  exitPointerLock = 'mozExitPointerLock';
	  pointerLockError = 'mozpointerlockerror';
	  movementX = 'mozMovementX';
	  movementY = 'mozMovementY';
	} else if ('webkitPointerLockElement' in document) {
	  pointerLockElement = 'webkitPointerLockElement';
	  pointerLockChange = 'webkitpointerlockchange';
	  requestPointerLock = 'webkitRequestPointerLock';
	  exitPointerLock = 'webkitExitPointerLock';
	  pointerLockError = 'webkitpointerlockerror';
	  movementX = 'webkitMovementX';
	  movementY = 'webkitMovementY';
	}

	var POINTERLOCK_ELEMENT = pointerLockElement;
	var POINTERLOCK_CHANGE = pointerLockChange;
	var REQUEST_POINTERLOCK = requestPointerLock;
	var EXIT_POINTERLOCK = exitPointerLock;
	var MOVEMENT_X = movementX;
	var MOVEMENT_Y = movementY;

	var index = (function (module) {
	var exports = module.exports;
	'use strict';

	module.exports = require$$0;
	return module.exports;
	})({exports:{}});

	// import './react-pointerlock.css';

	var propTypes = {
	  className: React.PropTypes.string,
	  onMouseMove: React.PropTypes.func,
	  blockElement: React.PropTypes.node
	};

	// onError: PropTypes.func,
	var defaultProps = {
	  blockElement: React.createElement(
	    'div',
	    { className: 'PointerLocker-blocker' },
	    React.createElement(
	      'div',
	      { className: 'PointerLocker-instructions' },
	      'Click to View'
	    )
	  )
	};

	var PointerLocker = (function (_React$Component) {
	  babelHelpers.inherits(PointerLocker, _React$Component);

	  function PointerLocker() {
	    babelHelpers.classCallCheck(this, PointerLocker);

	    var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(PointerLocker).call(this));

	    _this.state = {
	      isPointLock: false
	    };

	    _this.requestPointerLock = _this.requestPointerLock.bind(_this);
	    _this.onPointLockChange = _this.onPointLockChange.bind(_this);
	    _this.onMouseMove = _this.onMouseMove.bind(_this);
	    _this.onPointLockError = _this.onPointLockError.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }

	  babelHelpers.createClass(PointerLocker, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.caniuse()) {
	        document.addEventListener(POINTERLOCK_CHANGE, this.onPointLockChange, false);
	        // document.addEventListener(POINTERLOCK_ERROR, this.onPointLockError, false);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.caniuse()) {
	        document.removeEventListener(POINTERLOCK_CHANGE, this.onPointLockChange, false);
	        // document.removeEventListener(POINTERLOCK_ERROR, this.onPointLockError, false);
	      }
	    }
	  }, {
	    key: 'onPointLockChange',
	    value: function onPointLockChange() {
	      var currentPointLockElement = document[POINTERLOCK_ELEMENT];
	      var pointLockElement = index.findDOMNode(this.refs.pointerLocker);

	      if (currentPointLockElement === pointLockElement) {
	        // react onMouseMove event doesn't extension to mouse events
	        // https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API#extensions
	        document.addEventListener('mousemove', this.onMouseMove, false);
	        return this.setState({
	          isPointLock: true
	        });
	      }

	      document.removeEventListener('mousemove', this.onMouseMove);
	      this.setState({
	        isPointLock: false
	      });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      this.requestPointerLock();
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(event) {
	      if (this.props.onMouseMove) {
	        var movement = {
	          x: event[MOVEMENT_X] || 0,
	          y: event[MOVEMENT_Y] || 0
	        };

	        this.props.onMouseMove(movement, event);
	      }
	    }
	  }, {
	    key: 'onPointLockError',
	    value: function onPointLockError(error) {
	      console.error('requestPointerLock or exitPointerLock calling failed', error);

	      if (this.props.onError) {
	        this.props.onError(error);
	      }
	    }
	  }, {
	    key: 'exitPointLock',
	    value: function exitPointLock() {
	      document[EXIT_POINTERLOCK]();
	    }
	  }, {
	    key: 'requestPointerLock',
	    value: function requestPointerLock() {
	      var pointerLocker = index.findDOMNode(this.refs.pointerLocker);

	      pointerLocker[REQUEST_POINTERLOCK]();
	    }
	  }, {
	    key: 'caniuse',
	    value: function caniuse() {
	      if (POINTERLOCK_ELEMENT) {
	        return true;
	      }

	      return false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var className = index$1('PointerLocker', this.props.className);
	      var blocker = undefined;

	      if (!this.state.isPointLock) {
	        blocker = this.props.blockElement;
	      }

	      return React.createElement(
	        'div',
	        {
	          ref: 'pointerLocker',
	          className: className,
	          onMouseMove: this.state.isPointLock ? this.onMouseMove : null,
	          onClick: this.requestPointerLock },
	        blocker,
	        this.props.children
	      );
	    }
	  }]);
	  return PointerLocker;
	})(React.Component);

	PointerLocker.propTypes = propTypes;
	PointerLocker.defaultProps = defaultProps;

	return PointerLocker;

}));