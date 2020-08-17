import { ChevronLeftIcon, ChevronRightIcon } from '@bigcommerce/big-design-icons';
import React from 'react';
import { Flex } from '..';
import { Button } from '../Button';
import { Text } from '../Typography';

var Header = function Header(_ref) {
  var _ref$date = _ref.date,
      date = _ref$date === void 0 ? new Date() : _ref$date,
      decreaseMonth = _ref.decreaseMonth,
      increaseMonth = _ref.increaseMonth,
      months = _ref.months,
      prevMonthButtonDisabled = _ref.prevMonthButtonDisabled,
      nextMonthButtonDisabled = _ref.nextMonthButtonDisabled;
  return /*#__PURE__*/React.createElement(Flex, {
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(Button, {
    title: "View previous month.",
    type: "button",
    iconOnly: /*#__PURE__*/React.createElement(ChevronLeftIcon, {
      title: "View previous month."
    }),
    onClick: decreaseMonth,
    disabled: prevMonthButtonDisabled,
    variant: "subtle"
  }), /*#__PURE__*/React.createElement(Text, {
    as: "span",
    marginBottom: "none",
    bold: true
  }, "".concat(months[date.getMonth()], " ").concat(date.getFullYear())), /*#__PURE__*/React.createElement(Button, {
    title: "View next month.",
    type: "button",
    iconOnly: /*#__PURE__*/React.createElement(ChevronRightIcon, {
      title: "View next month."
    }),
    onClick: increaseMonth,
    disabled: nextMonthButtonDisabled,
    variant: "subtle"
  }));
};

export default Header;