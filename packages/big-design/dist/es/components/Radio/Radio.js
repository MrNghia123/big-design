import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { cloneElement, forwardRef, isValidElement, useMemo } from 'react';
import { useUniqueId } from '../../hooks';
import { typedMemo, warning } from '../../utils';
import { FormControlDescription } from '../Form';
import { RadioLabel } from './Label';
import { HiddenRadio, RadioContainer, RadioLabelContainer, StyledRadio } from './styled';

var RawRadio = function RawRadio(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      description = _ref.description,
      disabled = _ref.disabled,
      label = _ref.label,
      forwardedRef = _ref.forwardedRef,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["checked", "className", "description", "disabled", "label", "forwardedRef", "style"]);

  var uniqueRadioId = useUniqueId('radio');
  var id = props.id ? props.id : uniqueRadioId;
  var labelId = useUniqueId('radio_label');
  var renderedLabel = useMemo(function () {
    if (!label) {
      return null;
    }

    if (typeof label === 'string') {
      return /*#__PURE__*/React.createElement(RadioLabel, {
        htmlFor: id,
        id: labelId,
        disabled: disabled,
        "aria-hidden": disabled
      }, label);
    }

    if (isValidElement(label) && label.type === RadioLabel) {
      return cloneElement(label, {
        htmlFor: id,
        id: labelId
      });
    }

    warning('label must be either a string or a RadioLabel component.');
  }, [disabled, id, label, labelId]);
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
  return /*#__PURE__*/React.createElement(RadioContainer, {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(HiddenRadio, _extends({
    type: "radio",
    checked: checked,
    id: id,
    disabled: disabled
  }, props, {
    "aria-labelledby": labelId,
    ref: forwardedRef
  })), /*#__PURE__*/React.createElement(StyledRadio, {
    checked: checked,
    disabled: disabled,
    htmlFor: id,
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement(RadioLabelContainer, null, renderedLabel, renderedDescription));
};

export var Radio = typedMemo(forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(RawRadio, _extends({}, props, {
    forwardedRef: ref
  }));
}));