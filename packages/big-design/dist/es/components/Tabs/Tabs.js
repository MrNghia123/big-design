import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { memo } from 'react';
import { StyledTab, StyledTabs } from './styled';
export var Tabs = memo(function (_ref) {
  var activeTab = _ref.activeTab,
      children = _ref.children,
      className = _ref.className,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onTabClick = _ref.onTabClick,
      style = _ref.style,
      role = _ref.role,
      props = _objectWithoutProperties(_ref, ["activeTab", "children", "className", "items", "onTabClick", "style", "role"]);

  var handleOnTabClick = function handleOnTabClick(event) {
    event.preventDefault();
    var tabId = event.currentTarget.id;

    if (tabId !== activeTab && typeof onTabClick === 'function') {
      onTabClick(tabId);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledTabs, _extends({}, props, {
    flexDirection: "row",
    role: "tablist"
  }), items.map(function (_ref2) {
    var id = _ref2.id,
        title = _ref2.title,
        disabled = _ref2.disabled;
    return /*#__PURE__*/React.createElement(StyledTab, {
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
Tabs.displayName = 'Tabs';