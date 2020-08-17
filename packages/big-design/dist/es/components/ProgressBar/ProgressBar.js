import React from 'react';
import { StyledProgressBar, StyledProgressBarFiller } from './styled';
export var ProgressBar = function ProgressBar(_ref) {
  var percent = _ref.percent;
  return typeof percent === 'number' ? /*#__PURE__*/React.createElement(StyledProgressBar, {
    "aria-valuemax": 100,
    "aria-valuemin": 0,
    "aria-valuenow": percent,
    role: "progressbar"
  }, /*#__PURE__*/React.createElement(StyledProgressBarFiller, {
    percent: percent
  })) : /*#__PURE__*/React.createElement(StyledProgressBar, {
    role: "progressbar"
  }, /*#__PURE__*/React.createElement(StyledProgressBarFiller, null));
};