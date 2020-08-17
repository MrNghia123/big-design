"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormGroup = void 0;

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../../utils");

var _Checkbox = require("../../Checkbox");

var _Radio = require("../../Radio");

var _Error = require("../Error");

var _styled = require("./styled");

var FormGroup = function FormGroup(props) {
  var children = props.children,
      groupErrors = props.errors;

  var childrenCount = _react.Children.count(children);

  var inline = !_react.Children.toArray(children).every(function (child) {
    return (0, _react.isValidElement)(child) && (child.type === _Checkbox.Checkbox || child.type === _Radio.Radio);
  });

  var renderErrors = function renderErrors() {
    // If Form.Group has errors prop, don't generate errors from children
    if (groupErrors) {
      return generateErrors(groupErrors, true);
    }

    return _react.Children.map(children, function (child) {
      if ((0, _react.isValidElement)(child)) {
        var error = child.props.error;
        return error && generateErrors(error);
      }
    });
  };

  if (inline) {
    return /*#__PURE__*/_react.default.createElement(_styled.StyledInlineGroup, {
      childrenCount: childrenCount
    }, children, renderErrors());
  }

  return /*#__PURE__*/_react.default.createElement(_styled.StyledGroup, null, children, renderErrors());
};

exports.FormGroup = FormGroup;

var generateErrors = function generateErrors(errors) {
  var fromGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var key = arguments.length > 2 ? arguments[2] : undefined;

  if (typeof errors === 'string') {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: key
    }, /*#__PURE__*/_react.default.createElement(_styled.StyledError, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ErrorIcon, {
      color: "danger"
    }), /*#__PURE__*/_react.default.createElement(_Error.FormControlError, null, errors)));
  }

  if ((0, _react.isValidElement)(errors) && errors.type === _Error.FormControlError) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: key
    }, /*#__PURE__*/_react.default.createElement(_styled.StyledError, {
      alignItems: "center"
    }, /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ErrorIcon, {
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
    (0, _utils.warning)('errors must be either a string, FormControlError, or an array of strings or FormControlError components.');
  }
};