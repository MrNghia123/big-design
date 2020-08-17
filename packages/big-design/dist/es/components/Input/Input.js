import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { cloneElement, forwardRef, isValidElement, useMemo, useState } from 'react';
import { useUniqueId } from '../../hooks';
import { typedMemo, warning } from '../../utils';
import { Chip } from '../Chip';
import { FormControlDescription, FormControlError, FormControlLabel } from '../Form';
import { StyledIconWrapper, StyledInput, StyledInputContent, StyledInputWrapper } from './styled';

var StyleableInput = function StyleableInput(_ref) {
  var chips = _ref.chips,
      description = _ref.description,
      disabled = _ref.disabled,
      error = _ref.error,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      labelId = _ref.labelId,
      props = _objectWithoutProperties(_ref, ["chips", "description", "disabled", "error", "forwardedRef", "label", "labelId"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var uniqueInputId = useUniqueId('input');
  var id = props.id ? props.id : uniqueInputId;

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
  var renderedIconLeft = useMemo(function () {
    if (!props.iconLeft) {
      return null;
    }

    return /*#__PURE__*/React.createElement(StyledIconWrapper, {
      paddingLeft: "xSmall",
      paddingRight: "xxSmall"
    }, props.iconLeft);
  }, [props.iconLeft]);
  var renderedIconRight = useMemo(function () {
    if (!props.iconRight) {
      return null;
    }

    return /*#__PURE__*/React.createElement(StyledIconWrapper, {
      paddingLeft: "xxSmall",
      paddingRight: "xSmall"
    }, props.iconRight);
  }, [props.iconRight]);
  var renderedChips = useMemo(function () {
    if (!chips) {
      return null;
    }

    return chips.map(function (chip) {
      return /*#__PURE__*/React.createElement(Chip, _extends({}, chip, {
        key: chip.label,
        marginBottom: "none"
      }));
    });
  }, [chips]);
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
  return /*#__PURE__*/React.createElement("div", null, renderedLabel, renderedDescription, /*#__PURE__*/React.createElement(StyledInputWrapper, {
    disabled: disabled,
    error: errors,
    focus: focus
  }, renderedIconLeft, /*#__PURE__*/React.createElement(StyledInputContent, {
    chips: chips
  }, renderedChips, /*#__PURE__*/React.createElement(StyledInput, _extends({}, props, {
    disabled: disabled,
    chips: chips,
    error: errors,
    id: id,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: forwardedRef
  }))), renderedIconRight));
};

export var Input = typedMemo(forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(StyleableInput, _extends({}, props, {
    forwardedRef: ref
  }));
}));