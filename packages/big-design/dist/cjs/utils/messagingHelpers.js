"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBorderStyle = exports.getMessagingIcon = void 0;

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var getMessagingIcon = function getMessagingIcon(type, condensed) {
  var size = condensed ? 'large' : 'xLarge';

  switch (type) {
    case 'success':
      return /*#__PURE__*/_react.default.createElement(_bigDesignIcons.CheckCircleIcon, {
        size: size,
        color: "success"
      });

    case 'error':
      return /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ErrorIcon, {
        size: size,
        color: "danger"
      });

    case 'warning':
      return /*#__PURE__*/_react.default.createElement(_bigDesignIcons.WarningIcon, {
        size: size,
        color: "warning50"
      });

    case 'info':
      return /*#__PURE__*/_react.default.createElement(_bigDesignIcons.InfoIcon, {
        size: size,
        color: "primary60"
      });
  }
};

exports.getMessagingIcon = getMessagingIcon;

var getBorderStyle = function getBorderStyle(type, theme) {
  return (0, _styledComponents.css)(["", ";", ";", ";", ";"], type === 'success' && (0, _styledComponents.css)(["border-left:", " solid ", ";"], theme.spacing.xxSmall, theme.colors.success), type === 'error' && (0, _styledComponents.css)(["border-left:", " solid ", ";"], theme.spacing.xxSmall, theme.colors.danger), type === 'warning' && (0, _styledComponents.css)(["border-left:", " solid ", ";"], theme.spacing.xxSmall, theme.colors.warning50), type === 'info' && (0, _styledComponents.css)(["border-left:", " solid ", ";"], theme.spacing.xxSmall, theme.colors.primary60));
};

exports.getBorderStyle = getBorderStyle;