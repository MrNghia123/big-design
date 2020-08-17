"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSize = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _utils = require("../utils");

var _useRafState3 = require("./useRafState");

var useWindowSize = function useWindowSize() {
  var _useRafState = (0, _useRafState3.useRafState)({
    height: _utils.isClient ? window.innerHeight : -1,
    width: _utils.isClient ? window.innerWidth : -1
  }),
      _useRafState2 = (0, _slicedToArray2.default)(_useRafState, 2),
      state = _useRafState2[0],
      setState = _useRafState2[1];

  (0, _react.useEffect)(function () {
    var resizeHandler = function resizeHandler() {
      setState({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', resizeHandler);
    return function () {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [setState]);

  if (!_utils.isClient) {
    return state;
  }

  return state;
};

exports.useWindowSize = useWindowSize;