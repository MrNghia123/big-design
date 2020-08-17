"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemCheckbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Checkbox = require("../../Checkbox");

var _styled = require("./styled");

var StyleableListCheckboxItem = function StyleableListCheckboxItem(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      description = _ref.description,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      props = (0, _objectWithoutProperties2.default)(_ref, ["checked", "disabled", "description", "forwardedRef", "label"]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledListItem, (0, _extends2.default)({}, props, {
    actionType: "normal",
    isSelected: false,
    disabled: disabled,
    ref: forwardedRef
  }), /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    checked: checked,
    disabled: disabled,
    description: description,
    label: label,
    onChange: function onChange() {
      return null;
    },
    onClick: function onClick(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    tabIndex: -1
  }));
};

var ListItemCheckbox = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(StyleableListCheckboxItem, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.ListItemCheckbox = ListItemCheckbox;