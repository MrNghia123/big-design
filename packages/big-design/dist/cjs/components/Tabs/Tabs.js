"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var Tabs = (0, _react.memo)(function (_ref) {
  var activeTab = _ref.activeTab,
      children = _ref.children,
      className = _ref.className,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onTabClick = _ref.onTabClick,
      style = _ref.style,
      role = _ref.role,
      props = (0, _objectWithoutProperties2.default)(_ref, ["activeTab", "children", "className", "items", "onTabClick", "style", "role"]);

  var handleOnTabClick = function handleOnTabClick(event) {
    event.preventDefault();
    var tabId = event.currentTarget.id;

    if (tabId !== activeTab && typeof onTabClick === 'function') {
      onTabClick(tabId);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styled.StyledTabs, (0, _extends2.default)({}, props, {
    flexDirection: "row",
    role: "tablist"
  }), items.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        disabled = _ref2.disabled;
    return /*#__PURE__*/_react.default.createElement(_styled.StyledTab, {
      activeTab: activeTab,
      id: id,
      key: id,
      onClick: handleOnTabClick,
      role: "tab",
      tabIndex: id === activeTab ? -1 : 0,
      disabled: disabled
    }, title);
  })));
});
exports.Tabs = Tabs;
Tabs.displayName = 'Tabs';