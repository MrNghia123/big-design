import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { AddCircleOutlineIcon, RemoveCircleOutlineIcon } from '@bigcommerce/big-design-icons';
import React, { cloneElement, forwardRef, isValidElement, useEffect, useMemo, useState } from 'react';
import { useUniqueId } from '../../hooks';
import { typedMemo, warning } from '../../utils';
import { FormControlDescription, FormControlError, FormControlLabel } from '../Form';
import { StyledCounterButton, StyledCounterInput, StyledCounterWrapper } from './styled';
export var StylableCounter = typedMemo(function (_ref) {
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
      props = _objectWithoutProperties(_ref, ["min", "max", "step", "forwardedRef", "label", "labelId", "description", "error", "disabled", "value", "onCountChange"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var uniqueCounterId = useUniqueId('counter');
  var id = props.id ? props.id : uniqueCounterId;
  useEffect(function () {
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

  var renderedLabel = useMemo(function () {
    if (!label) {
      return null;
    }

    if (typeof label === 'string') {
      return /*#__PURE__*/React.createElement(FormControlLabel, {
        id: labelId,
        htmlFor: id,
        renderOptional: !props.required
      }, label);
    }

    if (isValidElement(label) && label.type === FormControlLabel) {
      return cloneElement(label, {
        id: labelId,
        htmlFor: id
      });
    }

    warning('label must be either a string or a FormControlLabel component.');
  }, [id, label, labelId, props.required]);
  var renderedDescription = useMemo(function () {
    if (!description) {
      return null;
    }

    if (typeof description === 'string') {
      return /*#__PURE__*/React.createElement(FormControlDescription, null, description);
    }

    if (isValidElement(description) && description.type === FormControlDescription) {
      return description;
    }

    warning('description must be either a string or a FormControlDescription component.');
  }, [description]);
  var errors = useMemo(function () {
    var validateError = function validateError(err) {
      if (!err) {
        return null;
      }

      if (typeof err === 'string') {
        return err;
      }

      if (isValidElement(err) && err.type === FormControlError) {
        return err;
      }

      warning('error must be either a string or a FormControlError component.');
    };

    if (Array.isArray(error)) {
      error.forEach(validateError);
      return error;
    }

    return validateError(error);
  }, [error]);
  return /*#__PURE__*/React.createElement("div", null, renderedLabel, renderedDescription, /*#__PURE__*/React.createElement(StyledCounterWrapper, {
    disabled: disabled,
    error: errors,
    focus: focus
  }, /*#__PURE__*/React.createElement(StyledCounterButton, {
    onClick: handleDecrease,
    disabled: disabled || value <= min,
    iconOnly: /*#__PURE__*/React.createElement(RemoveCircleOutlineIcon, {
      title: "Decrease count"
    })
  }), /*#__PURE__*/React.createElement(StyledCounterInput, _extends({}, props, {
    ref: forwardedRef,
    onKeyDown: handleKeyPress,
    value: value,
    disabled: disabled,
    error: errors,
    id: id,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  })), /*#__PURE__*/React.createElement(StyledCounterButton, {
    onClick: handleIncrease,
    disabled: disabled || value >= max,
    iconOnly: /*#__PURE__*/React.createElement(AddCircleOutlineIcon, {
      title: "Increase count"
    })
  })));
});
export var Counter = typedMemo(forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(StylableCounter, _extends({}, props, {
    forwardedRef: ref
  }));
}));