import { CheckCircleIcon, ErrorIcon } from '@bigcommerce/big-design-icons';
import React, { useMemo } from 'react';
import { typedMemo } from '../../utils';
import { CIRCLE_DIMENSIONS } from './constants';
import { StyledCircle, StyledCircleFiller, StyledProgressCircle, StyledText } from './styled';
export var ProgressCircle = typedMemo(function (_ref) {
  var error = _ref.error,
      percent = _ref.percent,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var dimensions = CIRCLE_DIMENSIONS[size];
  var renderedError = useMemo(function () {
    return /*#__PURE__*/React.createElement(ErrorIcon, {
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": percent ? percent : 0,
      "aria-valuetext": "Error",
      color: "danger",
      role: "progressbar",
      size: dimensions
    });
  }, [percent, dimensions]);
  var renderedSuccess = useMemo(function () {
    return /*#__PURE__*/React.createElement(CheckCircleIcon, {
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": 100,
      color: "success",
      role: "progressbar",
      size: dimensions
    });
  }, [dimensions]);
  var renderedCircle = useMemo(function () {
    if (typeof percent !== 'number') {
      return /*#__PURE__*/React.createElement(StyledProgressCircle, {
        role: "progressbar",
        size: size
      }, /*#__PURE__*/React.createElement(StyledCircle, {
        size: size
      }), /*#__PURE__*/React.createElement(StyledCircleFiller, {
        size: size
      }));
    }

    if (percent === 100) {
      return renderedSuccess;
    }

    return /*#__PURE__*/React.createElement(StyledProgressCircle, {
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": percent,
      role: "progressbar",
      size: size
    }, /*#__PURE__*/React.createElement(StyledCircle, {
      size: size
    }), /*#__PURE__*/React.createElement(StyledCircleFiller, {
      percent: percent,
      size: size
    }), (size === 'large' || size === 'medium') && /*#__PURE__*/React.createElement(StyledText, {
      size: size
    }, percent ? Math.floor(percent) : 0, "%"));
  }, [percent, size, renderedSuccess]);
  return error ? renderedError : renderedCircle;
});