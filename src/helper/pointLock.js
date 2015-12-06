
let pointerLockElement;
let pointerLockChange;
let requestPointerLock;
let exitPointerLock;
let pointerLockError;
let movementX;
let movementY;

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

export const POINTERLOCK_ELEMENT = pointerLockElement;
export const POINTERLOCK_CHANGE = pointerLockChange;
export const REQUEST_POINTERLOCK = requestPointerLock;
export const EXIT_POINTERLOCK = exitPointerLock;
export const POINTERLOCK_ERROR = pointerLockError;
export const MOVEMENT_X = movementX;
export const MOVEMENT_Y = movementY;
