"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _Button = require("../Button");

var _Typography = require("../Typography");

var Header = function Header(_ref) {
  var _ref$date = _ref.date,
      date = _ref$date === void 0 ? new Date() : _ref$date,
      decreaseMonth = _ref.decreaseMonth,
      increaseMonth = _ref.increaseMonth,
      months = _ref.months,
      prevMonthButtonDisabled = _ref.prevMonthButtonDisabled,
      nextMonthButtonDisabled = _ref.nextMonthButtonDisabled;
  return /*#__PURE__*/_react.default.createElement(_.Flex, {
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    title: "View previous month.",
    type: "button",
    iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ChevronLeftIcon, {
      title: "View previous month."
    }),
    onClick: decreaseMonth,
    disabled: prevMonthButtonDisabled,
    variant: "subtle"
  }), /*#__PURE__*/_react.default.createElement(_Typography.Text, {
    as: "span",
    marginBottom: "none",
    bold: true
  }, "".concat(months[date.getMonth()], " ").concat(date.getFullYear())), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    title: "View next month.",
    type: "button",
    iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.ChevronRightIcon, {
      title: "View next month."
    }),
    onClick: increaseMonth,
    disabled: nextMonthButtonDisabled,
    variant: "subtle"
  }));
};

var _default = Header;
exports.default = _default;