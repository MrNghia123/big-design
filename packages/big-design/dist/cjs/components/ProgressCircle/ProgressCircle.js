"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressCircle = void 0;

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _constants = require("./constants");

var _styled = require("./styled");

var ProgressCircle = (0, _utils.typedMemo)(function (_ref) {
  var error = _ref.error,
      percent = _ref.percent,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var dimensions = _constants.CIRCLE_DIMENSIONS[size];
  var renderedError = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ErrorIcon, {
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": percent ? percent : 0,
      "aria-valuetext": "Error",
      color: "danger",
      role: "progressbar",
      size: dimensions
    });
  }, [percent, dimensions]);
  var renderedSuccess = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement(_bigDesignIcons.CheckCircleIcon, {
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": 100,
      color: "success",
      role: "progressbar",
      size: dimensions
    });
  }, [dimensions]);
  var renderedCircle = (0, _react.useMemo)(function () {
    if (typeof percent !== 'number') {
      return /*#__PURE__*/_react.default.createElement(_styled.StyledProgressCircle, {
        role: "progressbar",
        size: size
      }, /*#__PURE__*/_react.default.createElement(_styled.StyledCircle, {
        size: size
      }), /*#__PURE__*/_react.default.createElement(_styled.StyledCircleFiller, {
        size: size
      }));
    }

    if (percent === 100) {
      return renderedSuccess;
    }

    return /*#__PURE__*/_react.default.createElement(_styled.StyledProgressCircle, {
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": percent,
      role: "progressbar",
      size: size
    }, /*#__PURE__*/_react.default.createElement(_styled.StyledCircle, {
      size: size
    }), /*#__PURE__*/_react.default.createElement(_styled.StyledCircleFiller, {
      percent: percent,
      size: size
    }), (size === 'large' || size === 'medium') && /*#__PURE__*/_react.default.createElement(_styled.StyledText, {
      size: size
    }, percent ? Math.floor(percent) : 0, "%"));
  }, [percent, size, renderedSuccess]);
  return error ? renderedError : renderedCircle;
});
exports.ProgressCircle = ProgressCircle;