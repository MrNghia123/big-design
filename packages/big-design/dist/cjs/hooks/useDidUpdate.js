"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDidUpdate = void 0;

var _react = require("react");

var useDidUpdate = function useDidUpdate(effect) {
  var isInitialRender = (0, _react.useRef)(true);
  (0, _react.useEffect)(function () {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      effect();
    }
  }, [effect]);
};

exports.useDidUpdate = useDidUpdate;