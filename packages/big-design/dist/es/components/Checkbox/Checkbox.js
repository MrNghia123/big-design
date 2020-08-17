import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { CheckIcon, RemoveIcon } from '@bigcommerce/big-design-icons';
import React, { cloneElement, forwardRef, isValidElement, useMemo } from 'react';
import { useUniqueId } from '../../hooks';
import { typedMemo, warning } from '../../utils';
import { FormControlDescription } from '../Form';
import { CheckboxLabel } from './Label';
import { CheckboxContainer, CheckboxLabelContainer, HiddenCheckbox, StyledCheckbox } from './styled';

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
      props = _objectWithoutProperties(_ref, ["checked", "className", "description", "disabled", "hiddenLabel", "isIndeterminate", "label", "forwardedRef", "style"]);

  var uniqueCheckboxId = useUniqueId('checkbox');
  var id = props.id ? props.id : uniqueCheckboxId;
  var labelId = useUniqueId('checkbox_label');
  var renderedLabel = useMemo(function () {
    if (!label) {
      return null;
    }

    if (typeof label === 'string') {
      return /*#__PURE__*/React.createElement(CheckboxLabel, {
        disabled: disabled,
        hidden: hiddenLabel,
        htmlFor: id,
        "aria-hidden": disabled,
        id: labelId
      }, label);
    }

    if (isValidElement(label) && label.type === CheckboxLabel) {
      return cloneElement(label, {
        hidden: hiddenLabel,
        htmlFor: id,
        id: labelId
      });
    }

    warning('label must be either a string or a CheckboxLabel component.');
  }, [disabled, hiddenLabel, id, label, labelId]);
  var renderedDescription = useMemo(function () {
    if (!description) {
      return null;
    }

    var link = _typeof(description) === 'object' ? description.link : undefined;
    var text = _typeof(description) === 'object' ? description.text : description;
    return /*#__PURE__*/React.createElement(FormControlDescription, {
      link: link
    }, text);
  }, [description]);
  return /*#__PURE__*/React.createElement(CheckboxContainer, {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(HiddenCheckbox, _extends({
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
  })), /*#__PURE__*/React.createElement(StyledCheckbox, {
    disabled: disabled,
    isIndeterminate: isIndeterminate,
    checked: checked,
    htmlFor: id,
    "aria-hidden": true
  }, !checked && isIndeterminate ? /*#__PURE__*/React.createElement(RemoveIcon, null) : /*#__PURE__*/React.createElement(CheckIcon, null)), /*#__PURE__*/React.createElement(CheckboxLabelContainer, null, renderedLabel, renderedDescription));
};

export var Checkbox = typedMemo(forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(RawCheckbox, _extends({}, props, {
    forwardedRef: ref
  }));
}));