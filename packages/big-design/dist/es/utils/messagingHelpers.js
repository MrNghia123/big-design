import { CheckCircleIcon, ErrorIcon, InfoIcon, WarningIcon } from '@bigcommerce/big-design-icons';
import React from 'react';
import { css } from 'styled-components';
export var getMessagingIcon = function getMessagingIcon(type, condensed) {
  var size = condensed ? 'large' : 'xLarge';

  switch (type) {
    case 'success':
      return /*#__PURE__*/React.createElement(CheckCircleIcon, {
        size: size,
        color: "success"
      });

    case 'error':
      return /*#__PURE__*/React.createElement(ErrorIcon, {
        size: size,
        color: "danger"
      });

    case 'warning':
      return /*#__PURE__*/React.createElement(WarningIcon, {
        size: size,
        color: "warning50"
      });

    case 'info':
      return /*#__PURE__*/React.createElement(InfoIcon, {
        size: size,
        color: "primary60"
      });
  }
};
export var getBorderStyle = function getBorderStyle(type, theme) {
  return css(["", ";", ";", ";", ";"], type === 'success' && css(["border-left:", " solid ", ";"], theme.spacing.xxSmall, theme.colors.success), type === 'error' && css(["border-left:", " solid ", ";"], theme.spacing.xxSmall, theme.colors.danger), type === 'warning' && css(["border-left:", " solid ", ";"], theme.spacing.xxSmall, theme.colors.warning50), type === 'info' && css(["border-left:", " solid ", ";"], theme.spacing.xxSmall, theme.colors.primary60));
};