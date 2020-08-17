"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = exports.RawPanel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _paddings = require("../../mixins/paddings/paddings");

var _Button = require("../Button");

var _Flex = require("../Flex");

var _styled = require("./styled");

var RawPanel = (0, _react.memo)(function (props) {
  var filteredProps = (0, _paddings.excludePaddingProps)(props);
  var action = filteredProps.action,
      children = filteredProps.children,
      header = filteredProps.header,
      rest = (0, _objectWithoutProperties2.default)(filteredProps, ["action", "children", "header"]);

  var renderHeader = function renderHeader() {
    if (!header && !action) {
      return null;
    }

    if (typeof header !== 'string') {
      return null;
    }

    return /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
      flexDirection: "row"
    }, header && /*#__PURE__*/_react.default.createElement(_styled.StyledH2, null, header), action && /*#__PURE__*/_react.default.createElement(_Button.Button, action, action.text));
  };

  return /*#__PURE__*/_react.default.createElement(_styled.StyledPanel, (0, _extends2.default)({}, rest, {
    backgroundColor: "white",
    shadow: "raised",
    padding: {
      mobile: 'medium',
      tablet: 'xxLarge'
    },
    borderRadius: "none"
  }), renderHeader(), children);
});
exports.RawPanel = RawPanel;

var Panel = function Panel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style"]);
  return /*#__PURE__*/_react.default.createElement(RawPanel, props);
};

exports.Panel = Panel;
Panel.displayName = 'Panel';