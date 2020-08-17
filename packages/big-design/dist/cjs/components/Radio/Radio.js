"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Form = require("../Form");

var _Label = require("./Label");

var _styled = require("./styled");

var RawRadio = function RawRadio(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      description = _ref.description,
      disabled = _ref.disabled,
      label = _ref.label,
      forwardedRef = _ref.forwardedRef,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["checked", "className", "description", "disabled", "label", "forwardedRef", "style"]);
  var uniqueRadioId = (0, _hooks.useUniqueId)('radio');
  var id = props.id ? props.id : uniqueRadioId;
  var labelId = (0, _hooks.useUniqueId)('radio_label');
  var renderedLabel = (0, _react.useMemo)(function () {
    if (!label) {
      return null;
    }

    if (typeof label === 'string') {
      return /*#__PURE__*/_react.default.createElement(_Label.RadioLabel, {
        htmlFor: id,
        id: labelId,
        disabled: disabled,
        "aria-hidden": disabled
      }, label);
    }

    if ((0, _react.isValidElement)(label) && label.type === _Label.RadioLabel) {
      return (0, _react.cloneElement)(label, {
        htmlFor: id,
        id: labelId
      });
    }

    (0, _utils.warning)('label must be either a string or a RadioLabel component.');
  }, [disabled, id, label, labelId]);
  var renderedDescription = (0, _react.useMemo)(function () {
    if (!description) {
      return null;
    }

    var link = (0, _typeof2.default)(description) === 'object' ? description.link : undefined;
    var text = (0, _typeof2.default)(description) === 'object' ? description.text : description;
    return /*#__PURE__*/_react.default.createElement(_Form.FormControlDescription, {
      link: link
    }, text);
  }, [description]);
  return /*#__PURE__*/_react.default.createElement(_styled.RadioContainer, {
    className: className,
    style: style
  }, /*#__PURE__*/_react.default.createElement(_styled.HiddenRadio, (0, _extends2.default)({
    type: "radio",
    checked: checked,
    id: id,
    disabled: disabled
  }, props, {
    "aria-labelledby": labelId,
    ref: forwardedRef
  })), /*#__PURE__*/_react.default.createElement(_styled.StyledRadio, {
    checked: checked,
    disabled: disabled,
    htmlFor: id,
    "aria-hidden": true
  }), /*#__PURE__*/_react.default.createElement(_styled.RadioLabelContainer, null, renderedLabel, renderedDescription));
};

var Radio = (0, _utils.typedMemo)((0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(RawRadio, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Radio = Radio;