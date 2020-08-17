import { ErrorIcon } from '@bigcommerce/big-design-icons';
import React, { Children, Fragment, isValidElement } from 'react';
import { warning } from '../../../utils';
import { Checkbox } from '../../Checkbox';
import { Radio } from '../../Radio';
import { FormControlError } from '../Error';
import { StyledError, StyledGroup, StyledInlineGroup } from './styled';
export var FormGroup = function FormGroup(props) {
  var children = props.children,
      groupErrors = props.errors;
  var childrenCount = Children.count(children);
  var inline = !Children.toArray(children).every(function (child) {
    return isValidElement(child) && (child.type === Checkbox || child.type === Radio);
  });

  var renderErrors = function renderErrors() {
    // If Form.Group has errors prop, don't generate errors from children
    if (groupErrors) {
      return generateErrors(groupErrors, true);
    }

    return Children.map(children, function (child) {
      if (isValidElement(child)) {
        var error = child.props.error;
        return error && generateErrors(error);
      }
    });
  };

  if (inline) {
    return /*#__PURE__*/React.createElement(StyledInlineGroup, {
      childrenCount: childrenCount
    }, children, renderErrors());
  }

  return /*#__PURE__*/React.createElement(StyledGroup, null, children, renderErrors());
};

var generateErrors = function generateErrors(errors) {
  var fromGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var key = arguments.length > 2 ? arguments[2] : undefined;

  if (typeof errors === 'string') {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: key
    }, /*#__PURE__*/React.createElement(StyledError, {
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(ErrorIcon, {
      color: "danger"
    }), /*#__PURE__*/React.createElement(FormControlError, null, errors)));
  }

  if (isValidElement(errors) && errors.type === FormControlError) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: key
    }, /*#__PURE__*/React.createElement(StyledError, {
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(ErrorIcon, {
      color: "danger"
    }), errors));
  }

  if (Array.isArray(errors)) {
    return errors.map(function (error, index) {
      return error && generateErrors(error, fromGroup, index);
    });
  }

  if (!errors) {
    return null;
  }

  if (fromGroup) {
    warning('errors must be either a string, FormControlError, or an array of strings or FormControlError components.');
  }
};