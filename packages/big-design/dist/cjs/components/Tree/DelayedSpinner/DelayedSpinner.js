"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DelayedSpinner = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ProgressCircle = require("../../ProgressCircle");

var DelayedSpinner = function DelayedSpinner() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  (0, _react.useEffect)(function () {
    // 50ms is a good middleground for the human eye
    // to not regonized a flash.
    var timeoutId = setTimeout(function () {
      return setShow(true);
    }, 50);
    return function () {
      return clearInterval(timeoutId);
    };
  }, []);
  return show ? /*#__PURE__*/_react.default.createElement(_ProgressCircle.ProgressCircle, {
    size: "xSmall"
  }) : null;
};

exports.DelayedSpinner = DelayedSpinner;