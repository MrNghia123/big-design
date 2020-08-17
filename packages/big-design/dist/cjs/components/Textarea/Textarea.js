"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Form = require("../Form");

var _styled = require("./styled");

var StyleableTextarea = function StyleableTextarea(_ref) {
  var description = _ref.description,
      error = _ref.error,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      labelId = _ref.labelId,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 3 : _ref$rows,
      _ref$resize = _ref.resize,
      resize = _ref$resize === void 0 ? true : _ref$resize,
      props = (0, _objectWithoutProperties2.default)(_ref, ["description", "error", "forwardedRef", "label", "labelId", "rows", "resize"]);
  var uniqueTextareaId = (0, _hooks.useUniqueId)('textarea');
  var id = props.id ? props.id : uniqueTextareaId;
  var MAX_ROWS = 7;
  var numOfRows = rows && rows > MAX_ROWS ? MAX_ROWS : rows;
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
  return /*#__PURE__*/_react.default.createElement("div", null, renderedLabel, renderedDescription, /*#__PURE__*/_react.default.createElement(_styled.StyledTextareaWrapper, null, /*#__PURE__*/_react.default.createElement(_styled.StyledTextarea, (0, _extends2.default)({}, props, {
    error: errors,
    id: id,
    rows: numOfRows,
    resize: resize,
    ref: forwardedRef
  }))));
};

var Textarea = (0, _utils.typedMemo)((0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(StyleableTextarea, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Textarea = Textarea;