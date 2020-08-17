"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Form = require("../Form");

var _Label = require("./Label");

var _styled = require("./styled");

var RawCheckbox = function RawCheckbox(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      description = _ref.description,
      disabled = _ref.disabled,
      hiddenLabel = _ref.hiddenLabel,
      isIndeterminate = _ref.isIndeterminate,
      label = _ref.label,
      forwardedRef = _ref.forwardedRef,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["checked", "className", "description", "disabled", "hiddenLabel", "isIndeterminate", "label", "forwardedRef", "style"]);
  var uniqueCheckboxId = (0, _hooks.useUniqueId)('checkbox');
  var id = props.id ? props.id : uniqueCheckboxId;
  var labelId = (0, _hooks.useUniqueId)('checkbox_label');
  var renderedLabel = (0, _react.useMemo)(function () {
    if (!label) {
      return null;
    }

    if (typeof label === 'string') {
      return /*#__PURE__*/_react.default.createElement(_Label.CheckboxLabel, {
        disabled: disabled,
        hidden: hiddenLabel,
        htmlFor: id,
        "aria-hidden": disabled,
        id: labelId
      }, label);
    }

    if ((0, _react.isValidElement)(label) && label.type === _Label.CheckboxLabel) {
      return (0, _react.cloneElement)(label, {
        hidden: hiddenLabel,
        htmlFor: id,
        id: labelId
      });
    }

    (0, _utils.warning)('label must be either a string or a CheckboxLabel component.');
  }, [disabled, hiddenLabel, id, label, labelId]);
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
  return /*#__PURE__*/_react.default.createElement(_styled.CheckboxContainer, {
    className: className,
    style: style
  }, /*#__PURE__*/_react.default.createElement(_styled.HiddenCheckbox, (0, _extends2.default)({
    type: "checkbox",
    checked: checked,
    id: id,
    disabled: disabled
  }, props, {
    "aria-labelledby": labelId,
    ref: function ref(checkbox) {
      if (checkbox && typeof isIndeterminate === 'boolean') {
        checkbox.indeterminate = !checked && isIndeterminate;
      }

      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(checkbox);
        } else {
          // RefObject.current is readonly in DefinitelyTyped
          // but in practice you can still write to it.
          // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065
          forwardedRef.current = checkbox;
        }
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_styled.StyledCheckbox, {
    disabled: disabled,
    isIndeterminate: isIndeterminate,
    checked: checked,
    htmlFor: id,
    "aria-hidden": true
  }, !checked && isIndeterminate ? /*#__PURE__*/_react.default.createElement(_bigDesignIcons.RemoveIcon, null) : /*#__PURE__*/_react.default.createElement(_bigDesignIcons.CheckIcon, null)), /*#__PURE__*/_react.default.createElement(_styled.CheckboxLabelContainer, null, renderedLabel, renderedDescription));
};

var Checkbox = (0, _utils.typedMemo)((0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(RawCheckbox, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.Checkbox = Checkbox;