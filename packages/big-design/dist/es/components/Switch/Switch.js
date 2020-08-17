import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef, memo } from 'react';
import { useUniqueId } from '../../hooks';
import { Flex } from '../Flex';
import { HiddenCheckbox, StyledSwitchLabel } from './styled';
export var RawSwitch = function RawSwitch(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["checked", "disabled", "forwardedRef"]);

  var uniqueSwitchId = useUniqueId('switch');
  var id = props.id ? props.id : uniqueSwitchId;
  return /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(HiddenCheckbox, _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled
  }, props, {
    ref: forwardedRef
  })), /*#__PURE__*/React.createElement(StyledSwitchLabel, {
    "aria-hidden": true,
    disabled: disabled,
    htmlFor: id,
    checked: checked
  }));
};
export var Switch = memo(forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(RawSwitch, _extends({}, props, {
    forwardedRef: ref
  }));
}));