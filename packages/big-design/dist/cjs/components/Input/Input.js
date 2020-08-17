"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Chip = require("../Chip");

var _Form = require("../Form");

var _styled = require("./styled");

var StyleableInput = function StyleableInput(_ref) {
  var chips = _ref.chips,
      description = _ref.description,
      disabled = _ref.disabled,
      error = _ref.error,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      labelId = _ref.labelId,
      props = (0, _objectWithoutProperties2.default)(_ref, ["chips", "description", "disabled", "error", "forwardedRef", "label", "labelId"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var uniqueInputId = (0, _hooks.useUniqueId)('input');
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
  var renderedIconLeft = (0, _react.useMemo)(function () {
    if (!props.iconLeft) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement(_styled.StyledIconWrapper, {
      paddingLeft: "xSmall",
      paddingRight: "xxSmall"
    }, props.iconLeft);
  }, [props.iconLeft]);
  var renderedIconRight = (0, _react.useMemo)(function () {
    if (!props.iconRight) {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement(_styled.StyledIconWrapper, {
      paddingLeft: "xxSmall",
      paddingRight: "xSmall"
    }, props.iconRight);
  }, [props.iconRight]);
  var renderedChips = (0, _react.useMemo)(function () {
    if (!chips) {
      return null;
    }

    return chips.map(function (chip) {
      return /*#__PURE__*/_react.default.createElement(_Chip.Chip, (0, _extends2.default)({}, chip, {
        key: chip.label,
        marginBottom: "none"
      }));
    });
  }, [chips]);
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
  return /*#__PURE__*/_react.default.createElement("div", null, renderedLabel, renderedDescription, /*#__PURE__*/_react.default.createElement(_styled.StyledInputWrapper, {
    disabled: disabled,
    error: errors,
    focus: focus
  }, renderedIconLeft, /*#__PURE__*/_react.default.createElement(_styled.StyledInputContent, {
    chips: chips
  }, renderedChips, /*#__PURE__*/_react.default.createElement(_styled.StyledInput, (0, _extends2.default)({}, props, {
    disabled: disabled,
    chips: chips,
    error: errors,
    id: id,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: forwardedRef
  }))), renderedIconRight));
};

var Input = (0, _utils.typedMemo)((0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(StyleableInput, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Input = Input;