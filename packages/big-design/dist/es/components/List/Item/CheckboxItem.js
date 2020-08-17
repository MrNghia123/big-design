import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef, memo } from 'react';
import { Checkbox } from '../../Checkbox';
import { StyledListItem } from './styled';

var StyleableListCheckboxItem = function StyleableListCheckboxItem(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      description = _ref.description,
      forwardedRef = _ref.forwardedRef,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["checked", "disabled", "description", "forwardedRef", "label"]);

  return /*#__PURE__*/React.createElement(StyledListItem, _extends({}, props, {
    actionType: "normal",
    isSelected: false,
    disabled: disabled,
    ref: forwardedRef
  }), /*#__PURE__*/React.createElement(Checkbox, {
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

export var ListItemCheckbox = memo(forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyleableListCheckboxItem, _extends({}, props, {
    forwardedRef: ref
  }));
}));