"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = require("./styled");

var ProgressBar = function ProgressBar(_ref) {
  var percent = _ref.percent;
  return typeof percent === 'number' ? /*#__PURE__*/_react.default.createElement(_styled.StyledProgressBar, {
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": percent,
    role: "progressbar"
  }, /*#__PURE__*/_react.default.createElement(_styled.StyledProgressBarFiller, {
    percent: percent
  })) : /*#__PURE__*/_react.default.createElement(_styled.StyledProgressBar, {
    role: "progressbar"
  }, /*#__PURE__*/_react.default.createElement(_styled.StyledProgressBarFiller, null));
};

exports.ProgressBar = ProgressBar;