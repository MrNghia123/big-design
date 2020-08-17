"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _downshift = require("downshift");

var _react = _interopRequireWildcard(require("react"));

var _reactPopper = require("react-popper");

var _hooks = require("../../hooks");

var _Flex = require("../Flex");

var _Item = require("../Flex/Item");

var _List = require("../List");

var _GroupHeader = require("../List/GroupHeader");

var _Item2 = require("../List/Item");

var _Tooltip = require("../Tooltip");

var _styled = require("./styled");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Dropdown = (0, _react.memo)(function (_ref) {
  var className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? 250 : _ref$maxHeight,
      id = _ref.id,
      items = _ref.items,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
      toggle = _ref.toggle,
      style = _ref.style,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["className", "disabled", "maxHeight", "id", "items", "placement", "toggle", "style"]);
  // We only need the items to pass down to Downshift, not groups
  var onlyItems = (0, _react.useMemo)(function () {
    return flattenItems(items);
  }, [items]); // We need to keep track of key since we need to use it between groups.

  var itemKey = (0, _react.useRef)(0);
  var dropdownUniqueId = (0, _hooks.useUniqueId)('dropdown');
  var handleOnSelectedItemChange = (0, _react.useCallback)(function (_ref2) {
    var selectedItem = _ref2.selectedItem;

    if (!selectedItem) {
      return;
    }

    if (selectedItem.type !== 'link' && typeof selectedItem.onItemClick === 'function') {
      selectedItem.onItemClick(selectedItem);
    }
  }, []);

  var _useSelect = (0, _downshift.useSelect)({
    circularNavigation: true,
    defaultHighlightedIndex: 0,
    id: dropdownUniqueId,
    itemToString: function itemToString(item) {
      return item ? item.content : '';
    },
    items: onlyItems,
    menuId: id,
    onSelectedItemChange: handleOnSelectedItemChange,
    selectedItem: null,
    toggleButtonId: toggle.props.id
  }),
      getItemProps = _useSelect.getItemProps,
      getMenuProps = _useSelect.getMenuProps,
      getToggleButtonProps = _useSelect.getToggleButtonProps,
      highlightedIndex = _useSelect.highlightedIndex,
      isOpen = _useSelect.isOpen;

  var renderToggle = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement(_reactPopper.Reference, null, function (_ref3) {
      var ref = _ref3.ref;
      return (0, _react.isValidElement)(toggle) && (0, _react.cloneElement)(toggle, _objectSpread({}, getToggleButtonProps({
        disabled: disabled,
        ref: ref
      })));
    });
  }, [disabled, getToggleButtonProps, toggle]);
  var renderItem = (0, _react.useCallback)(function (item) {
    var actionType = item.actionType,
        content = item.content,
        itemDisabled = item.disabled,
        hash = item.hash,
        onItemClick = item.onItemClick,
        type = item.type,
        itemProps = (0, _objectWithoutProperties2.default)(item, ["actionType", "content", "disabled", "hash", "onItemClick", "type"]);
    var key = itemKey.current;
    var isHighlighted = highlightedIndex === key;
    itemKey.current += 1;
    return /*#__PURE__*/_react.default.createElement(_Item2.ListItem, (0, _extends2.default)({}, itemProps, getItemProps({
      disabled: itemDisabled,
      index: key,
      item: item
    }), {
      actionType: actionType,
      isAction: true,
      isHighlighted: isHighlighted,
      key: "".concat(content, "-").concat(key)
    }), getContent(item, isHighlighted));
  }, [getItemProps, highlightedIndex]);
  var renderLinkItem = (0, _react.useCallback)(function (item) {
    var actionType = item.actionType,
        content = item.content,
        itemDisabled = item.disabled,
        url = item.url,
        target = item.target,
        type = item.type,
        itemProps = (0, _objectWithoutProperties2.default)(item, ["actionType", "content", "disabled", "url", "target", "type"]);
    var key = itemKey.current;
    var isHighlighted = highlightedIndex === key;
    itemKey.current += 1;
    return /*#__PURE__*/_react.default.createElement(_Item2.ListItem, (0, _extends2.default)({}, itemProps, getItemProps({
      disabled: itemDisabled,
      index: key,
      item: item
    }), {
      actionType: actionType,
      isAction: true,
      isHighlighted: isHighlighted,
      key: "".concat(content, "-").concat(key)
    }), getContent(item, isHighlighted));
  }, [getItemProps, highlightedIndex]);
  var renderItems = (0, _react.useCallback)(function (dropdownItems) {
    return Array.isArray(dropdownItems) && dropdownItems.map(function (item) {
      return item.type === 'link' ? renderLinkItem(item) : renderItem(item);
    });
  }, [renderItem, renderLinkItem]);
  var renderGroup = (0, _react.useCallback)(function (group) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_GroupHeader.ListGroupHeader, null, group.label), renderItems(group.items));
  }, [renderItems]);
  var renderChildren = (0, _react.useMemo)(function () {
    // Reset the key every time we rerender children
    itemKey.current = 0;

    if (Array.isArray(items) && items.every(isGroup)) {
      return items.map(function (group, index) {
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
          key: index
        }, renderGroup(group));
      });
    }

    if (Array.isArray(items) && items.every(isItem)) {
      return renderItems(items);
    }
  }, [items, renderGroup, renderItems]);
  var renderList = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement(_reactPopper.Popper, {
      modifiers: [{
        name: 'eventListeners'
      }, {
        name: 'offset',
        options: {
          offset: [0, 4]
        }
      }],
      strategy: "absolute",
      placement: placement
    }, function (_ref4) {
      var popperPlacement = _ref4.placement,
          ref = _ref4.ref,
          popperStyle = _ref4.style,
          update = _ref4.update;
      return /*#__PURE__*/_react.default.createElement(_List.List, (0, _extends2.default)({}, rest, getMenuProps({
        onKeyDown: function onKeyDown(event) {
          if (event.key === 'Enter') {
            var element = event.currentTarget.children[highlightedIndex];
            var link = element.querySelector('a'); // We want to click the link if it is selected

            if (link) {
              link.click();
            }
          }
        },
        ref: ref
      }), {
        "data-placement": popperPlacement,
        maxHeight: maxHeight,
        style: popperStyle,
        update: update
      }), renderChildren);
    });
  }, [getMenuProps, highlightedIndex, maxHeight, placement, renderChildren, rest]);
  return /*#__PURE__*/_react.default.createElement(_reactPopper.Manager, null, /*#__PURE__*/_react.default.createElement(_styled.StyledBox, null, renderToggle, isOpen && renderList));
});
exports.Dropdown = Dropdown;

var flattenItems = function flattenItems(items) {
  return items.every(isGroup) ? items.map(function (group) {
    return group.items;
  }).reduce(function (acum, curr) {
    return acum.concat(curr);
  }, []) : items;
};

var isGroup = function isGroup(item) {
  return 'items' in item && !('content' in item);
};

var isItem = function isItem(item) {
  return 'content' in item && !('items' in item);
};

var renderIcon = function renderIcon(item, isHighlighted) {
  return (0, _react.isValidElement)(item.icon) && (0, _react.cloneElement)(item.icon, {
    color: iconColor(item, isHighlighted),
    size: 'large'
  });
};

var getContent = function getContent(item, isHighlighted) {
  var itemDisabled = item.disabled,
      icon = item.icon,
      tooltip = item.tooltip;

  var baseContent = /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    alignItems: "center",
    flexDirection: "row"
  }, icon && /*#__PURE__*/_react.default.createElement(_Item.FlexItem, {
    paddingRight: "xSmall"
  }, renderIcon(item, isHighlighted)), item.content);

  var content = item.type === 'link' && !itemDisabled ? wrapInLink(item, baseContent) : baseContent;
  return itemDisabled && tooltip ? wrapInTooltip(tooltip, content) : content;
};

var iconColor = function iconColor(item, isHighlighted) {
  if (item.disabled) {
    return 'secondary40';
  }

  if (!isHighlighted) {
    return 'secondary60';
  }

  return item.actionType === 'destructive' ? 'danger50' : 'primary';
};

var wrapInLink = function wrapInLink(item, content) {
  return /*#__PURE__*/_react.default.createElement(_styled.StyledLink, {
    href: item.url,
    tabIndex: -1,
    target: item.target
  }, content);
};

var wrapInTooltip = function wrapInTooltip(tooltip, tooltipTrigger) {
  return /*#__PURE__*/_react.default.createElement(_Tooltip.Tooltip, {
    placement: "left",
    trigger: tooltipTrigger,
    modifiers: [{
      name: 'preventOverflow'
    }, {
      name: 'offset',
      options: {
        offset: [0, 20]
      }
    }],
    inline: false
  }, tooltip);
};