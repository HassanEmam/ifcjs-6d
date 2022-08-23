import { MathUtils } from "three";
// import { index } from "hold-event/dist/hold-event.min.js";
import { index } from "hold-event/dist/hold-event.min.js";

// Keyboards keys to navigate
const KEYCODE = {
  W: 87,
  A: 65,
  S: 83,
  D: 68,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
};

// "W", "A", "S", "D" Keys Controls
const wKey = new holdEvent.KeyboardKeyHold(KEYCODE.W, 16.666);
const aKey = new holdEvent.KeyboardKeyHold(KEYCODE.A, 16.666);
const sKey = new holdEvent.KeyboardKeyHold(KEYCODE.S, 16.666);
const dKey = new holdEvent.KeyboardKeyHold(KEYCODE.D, 16.666);

export function wasdKeysControls(cameraControls) {
  aKey.addEventListener("holding", function (event) {
    cameraControls.truck(-0.01 * event.deltaTime, 0, false);
  });
  dKey.addEventListener("holding", function (event) {
    cameraControls.truck(0.01 * event.deltaTime, 0, false);
  });
  wKey.addEventListener("holding", function (event) {
    cameraControls.forward(0.01 * event.deltaTime, false);
  });
  sKey.addEventListener("holding", function (event) {
    cameraControls.forward(-0.01 * event.deltaTime, false);
  });
}

// Arrows Keys Controls
const leftKey = new holdEvent.KeyboardKeyHold(KEYCODE.ARROW_LEFT, 100);
const rightKey = new holdEvent.KeyboardKeyHold(KEYCODE.ARROW_RIGHT, 100);
const upKey = new holdEvent.KeyboardKeyHold(KEYCODE.ARROW_UP, 100);
const downKey = new holdEvent.KeyboardKeyHold(KEYCODE.ARROW_DOWN, 100);

export function arrowsKeysControls(cameraControls) {
  leftKey.addEventListener("holding", function (event) {
    cameraControls.rotate(-0.1 * MathUtils.DEG2RAD * event.deltaTime, 0, true);
  });
  rightKey.addEventListener("holding", function (event) {
    cameraControls.rotate(0.1 * MathUtils.DEG2RAD * event.deltaTime, 0, true);
  });
  upKey.addEventListener("holding", function (event) {
    cameraControls.rotate(0, -0.05 * MathUtils.DEG2RAD * event.deltaTime, true);
  });
  downKey.addEventListener("holding", function (event) {
    cameraControls.rotate(0, 0.05 * MathUtils.DEG2RAD * event.deltaTime, true);
  });
}
