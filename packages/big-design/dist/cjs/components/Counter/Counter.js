"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Counter = exports.StylableCounter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Form = require("../Form");

var _styled = require("./styled");

var StylableCounter = (0, _utils.typedMemo)(function (_ref) {
  var _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      labelId = _ref.labelId,
      description = _ref.description,
      error = _ref.error,
      disabled = _ref.disabled,
      value = _ref.value,
      onCountChange = _ref.onCountChange,
      props = (0, _objectWithoutProperties2.default)(_ref, ["min", "max", "step", "forwardedRef", "label", "labelId", "description", "error", "disabled", "value", "onCountChange"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var uniqueCounterId = (0, _hooks.useUniqueId)('counter');
  var id = props.id ? props.id : uniqueCounterId;
  (0, _react.useEffect)(function () {
    if (!Number.isInteger(value)) {
      onCountChange(Math.round(value));
    }
  }, [onCountChange, value]);

  var handleFocus = function handleFocus(event) {
    var onFocus = props.onFocus;
    setFocus(true);
    return onFocus && onFocus(event);
  };

  var handleBlur = function handleBlur(event) {
    var onBlur = props.onBlur;
    setFocus(false);
    return onBlur && onBlur(event);
  };

  var handleIncrease = function handleIncrease(event) {
    event.preventDefault();

    if (value + step > max) {
      return;
    } // Checks that the provided value is a multiple of the step


    if (value % step === 0) {
      onCountChange(value + step);
    } // If not, returns nearest higher value that is a multiple of the step
    else {
        onCountChange(value + (step - value % step));
      }
  };

  var handleDecrease = function handleDecrease(event) {
    event.preventDefault();

    if (value - step < min) {
      return;
    } // Checks that the provided value is a multiple of the step


    if (value % step === 0) {
      onCountChange(value - step);
    } // If not, returns nearest lower value that is a multiple of the step
    else {
        onCountChange(value - value % step);
      }
  };

  var handleChange = function handleChange(event) {
    var newValue = Number(event.currentTarget.value);

    if (isNaN(newValue)) {
      return;
    }

    if (!Number.isInteger(newValue)) {
      onCountChange(Math.round(newValue));
    }

    if (newValue >= min && newValue <= max) {
      onCountChange(newValue);
    }

    return;
  };

  var handleKeyPress = function handleKeyPress(event) {
    switch (event.key) {
      case 'ArrowUp':
        handleIncrease(event);
        break;

      case 'ArrowDown':
        handleDecrease(event);
        break;

      case 'Enter':
        event.preventDefault();
        break;

      case 'Escape':
        onCountChange(0);
        break;

      default:
        break;
    }
  };

  var renderedLabel = (0, _react.useMemo)(function () {
    if (!label) {
      return null;
    }

    if (typeof label === 'string') {
      return /*#__PURE__*/_react.default.createElement(_Form.FormControlLabel, {
        id: labelId,
        htmlFor: id,
        renderOptional: !props.required
      }, label);
    }

    if ((0, _react.isValidElement)(label) && label.type === _Form.FormControlLabel) {
      return (0, _react.cloneElement)(label, {
        id: labelId,
        htmlFor: id
      });
    }

    (0, _utils.warning)('label must be either a string or a FormControlLabel component.');
  }, [id, label, labelId, props.required]);
  var renderedDescription = (0, _react.useMemo)(function () {
    if (!description) {
      return null;
    }

    if (typeof description === 'string') {
      return /*#__PURE__*/_react.default.createElement(_Form.FormControlDescription, null, description);
    }

    if ((0, _react.isValidElement)(description) && description.type === _Form.FormControlDescription) {
      return description;
    }

    (0, _utils.warning)('description must be either a string or a FormControlDescription component.');
  }, [description]);
  var errors = (0, _react.useMemo)(function () {
    var validateError = function validateError(err) {
      if (!err) {
        return null;
      }

      if (typeof err === 'string') {
        return err;
      }

      if ((0, _react.isValidElement)(err) && err.type === _Form.FormControlError) {
        return err;
      }

      (0, _utils.warning)('error must be either a string or a FormControlError component.');
    };

    if (Array.isArray(error)) {
      error.forEach(validateError);
      return error;
    }

    return validateError(error);
  }, [error]);
  return /*#__PURE__*/_react.default.createElement("div", null, renderedLabel, renderedDescription, /*#__PURE__*/_react.default.createElement(_styled.StyledCounterWrapper, {
    disabled: disabled,
    error: errors,
    focus: focus
  }, /*#__PURE__*/_react.default.createElement(_styled.StyledCounterButton, {
    onClick: handleDecrease,
    disabled: disabled || value <= min,
    iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.RemoveCircleOutlineIcon, {
      title: "Decrease count"
    })
  }), /*#__PURE__*/_react.default.createElement(_styled.StyledCounterInput, (0, _extends2.default)({}, props, {
    ref: forwardedRef,
    onKeyDown: handleKeyPress,
    value: value,
    disabled: disabled,
    error: errors,
    id: id,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  })), /*#__PURE__*/_react.default.createElement(_styled.StyledCounterButton, {
    onClick: handleIncrease,
    disabled: disabled || value >= max,
    iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.AddCircleOutlineIcon, {
      title: "Increase count"
    })
  })));
});
exports.StylableCounter = StylableCounter;
var Counter = (0, _utils.typedMemo)((0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(StylableCounter, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Counter = Counter;