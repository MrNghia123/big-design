import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { cloneElement, forwardRef, isValidElement, useMemo } from 'react';
import { useUniqueId } from '../../hooks';
import { typedMemo, warning } from '../../utils';
import { FormControlDescription, FormControlError, FormControlLabel } from '../Form';
import { StyledTextarea, StyledTextareaWrapper } from './styled';

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
      props = _objectWithoutProperties(_ref, ["description", "error", "forwardedRef", "label", "labelId", "rows", "resize"]);

  var uniqueTextareaId = useUniqueId('textarea');
  var id = props.id ? props.id : uniqueTextareaId;
  var MAX_ROWS = 7;
  var numOfRows = rows && rows > MAX_ROWS ? MAX_ROWS : rows;
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
  return /*#__PURE__*/React.createElement("div", null, renderedLabel, renderedDescription, /*#__PURE__*/React.createElement(StyledTextareaWrapper, null, /*#__PURE__*/React.createElement(StyledTextarea, _extends({}, props, {
    error: errors,
    id: id,
    rows: numOfRows,
    resize: resize,
    ref: forwardedRef
  }))));
};

export var Textarea = typedMemo(forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["className", "style"]);

  return /*#__PURE__*/React.createElement(StyleableTextarea, _extends({}, props, {
    forwardedRef: ref
  }));
}));