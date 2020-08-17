"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _downshift = require("downshift");

var _react = _interopRequireWildcard(require("react"));

var _reactPopper = require("react-popper");

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Box = require("../Box");

var _Flex = require("../Flex");

var _Item = require("../Flex/Item");

var _Form = require("../Form");

var _Input = require("../Input");

var _List = require("../List");

var _GroupHeader = require("../List/GroupHeader");

var _Item2 = require("../List/Item");

var _Typography = require("../Typography");

var _styled = require("./styled");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Select = (0, _utils.typedMemo)(function (_ref) {
  var action = _ref.action,
      _ref$autoWidth = _ref.autoWidth,
      autoWidth = _ref$autoWidth === void 0 ? false : _ref$autoWidth,
      className = _ref.className,
      disabled = _ref.disabled,
      _ref$filterable = _ref.filterable,
      filterable = _ref$filterable === void 0 ? true : _ref$filterable,
      inputRef = _ref.inputRef,
      id = _ref.id,
      label = _ref.label,
      labelId = _ref.labelId,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? 250 : _ref$maxHeight,
      onOptionChange = _ref.onOptionChange,
      options = _ref.options,
      placeholder = _ref.placeholder,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
      _ref$positionFixed = _ref.positionFixed,
      positionFixed = _ref$positionFixed === void 0 ? false : _ref$positionFixed,
      required = _ref.required,
      style = _ref.style,
      value = _ref.value,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["action", "autoWidth", "className", "disabled", "filterable", "inputRef", "id", "label", "labelId", "maxHeight", "onOptionChange", "options", "placeholder", "placement", "positionFixed", "required", "style", "value"]);
  // Merge options and action
  var flattenedOptions = (0, _react.useMemo)(function () {
    return action ? [].concat((0, _toConsumableArray2.default)(flattenOptions(options)), [action]) : flattenOptions(options);
  }, [action, options]);
  var itemKey = (0, _react.useRef)(0);
  var findSelectedOption = (0, _react.useMemo)(function () {
    return flattenedOptions.find(function (option) {
      return 'value' in option && option.value === value;
    });
  }, [flattenedOptions, value]);

  var _useState = (0, _react.useState)(flattenedOptions),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectOptions = _useState2[0],
      setSelectOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(findSelectedOption ? findSelectedOption.content : ''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var _useState5 = (0, _react.useState)(findSelectedOption),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      selectedOption = _useState6[0],
      setSelectedOption = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      highlightedIndex = _useState8[0],
      setHighlightedIndex = _useState8[1];

  var defaultRef = (0, _react.createRef)();
  var selectUniqueId = (0, _hooks.useUniqueId)('select'); // Need to set select options if options prop changes

  (0, _react.useEffect)(function () {
    return setSelectOptions(flattenedOptions);
  }, [flattenedOptions]); // Set the input's value to match the selected item

  (0, _react.useEffect)(function () {
    setInputValue(selectedOption ? selectedOption.content : '');
  }, [selectedOption]);
  (0, _react.useEffect)(function () {
    setSelectedOption(findSelectedOption);
  }, [findSelectedOption]);
  var findSelectedOptionIndex = (0, _react.useMemo)(function () {
    return selectOptions.findIndex(function (item) {
      return 'value' in item && item.value === value;
    });
  }, [selectOptions, value]);
  (0, _react.useEffect)(function () {
    setHighlightedIndex(findSelectedOptionIndex);
  }, [findSelectedOptionIndex]);

  var handleSetInputValue = function handleSetInputValue(changes) {
    if (filterable && changes.isOpen === true) {
      setSelectOptions(filterOptions(changes.inputValue));
    }

    setInputValue(changes.inputValue || '');
  };

  var filterOptions = function filterOptions() {
    var inputVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return flattenedOptions.filter(function (option) {
      return option.content === (action && action.content) || option.content.toLowerCase().startsWith(inputVal.trim().toLowerCase());
    });
  };

  var handleOnHighlightedIndexChange = function handleOnHighlightedIndexChange(changes) {
    if (typeof changes.highlightedIndex !== 'undefined') {
      setHighlightedIndex(changes.highlightedIndex);
    }
  };

  var handleOnIsOpenChange = function handleOnIsOpenChange(changes) {
    if (filterable && changes.isOpen === false) {
      // Reset the items if filtered
      setSelectOptions(flattenedOptions);
    }
  };

  var handleOnSelectedItemChange = function handleOnSelectedItemChange(changes) {
    if (action && changes.selectedItem && changes.selectedItem.content === action.content) {
      action.onActionClick(inputValue);
    } else if (changes.selectedItem && 'value' in changes.selectedItem && typeof onOptionChange === 'function') {
      onOptionChange(changes.selectedItem.value, changes.selectedItem);
    }
  };

  var handleStateReducer = function handleStateReducer(state, actionAndChanges) {
    switch (actionAndChanges.type) {
      case _downshift.useCombobox.stateChangeTypes.InputBlur:
        return _objectSpread({}, actionAndChanges.changes, {
          inputValue: selectedOption ? selectedOption.content : ''
        });

      case _downshift.useCombobox.stateChangeTypes.InputKeyDownEnter:
      case _downshift.useCombobox.stateChangeTypes.ItemClick:
        if ((actionAndChanges.changes.selectedItem && actionAndChanges.changes.selectedItem.content) === (action && action.content)) {
          return _objectSpread({}, actionAndChanges.changes, {
            inputValue: state.inputValue
          });
        }

        return actionAndChanges.changes;

      default:
        return actionAndChanges.changes;
    }
  };

  var _useCombobox = (0, _downshift.useCombobox)({
    highlightedIndex: highlightedIndex,
    id: selectUniqueId,
    inputId: id,
    inputValue: inputValue,
    itemToString: function itemToString(option) {
      return option ? option.content : '';
    },
    items: selectOptions,
    labelId: labelId,
    onHighlightedIndexChange: handleOnHighlightedIndexChange,
    onInputValueChange: handleSetInputValue,
    onIsOpenChange: handleOnIsOpenChange,
    onSelectedItemChange: handleOnSelectedItemChange,
    selectedItem: selectedOption || null,
    stateReducer: handleStateReducer
  }),
      closeMenu = _useCombobox.closeMenu,
      getComboboxProps = _useCombobox.getComboboxProps,
      getInputProps = _useCombobox.getInputProps,
      getItemProps = _useCombobox.getItemProps,
      getLabelProps = _useCombobox.getLabelProps,
      getMenuProps = _useCombobox.getMenuProps,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      isOpen = _useCombobox.isOpen,
      openMenu = _useCombobox.openMenu;

  var setCallbackRef = (0, _react.useCallback)(function (ref) {
    if (typeof inputRef === 'function') {
      inputRef(ref);
    }
  }, [inputRef]);
  var getInputRef = (0, _react.useCallback)(function () {
    if (inputRef && (0, _typeof2.default)(inputRef) === 'object') {
      return inputRef;
    } else if (typeof inputRef === 'function') {
      return setCallbackRef;
    }

    return defaultRef;
  }, [defaultRef, inputRef, setCallbackRef]);
  var renderLabel = (0, _react.useMemo)(function () {
    if (!label) {
      return null;
    }

    if (typeof label === 'string') {
      return /*#__PURE__*/_react.default.createElement(_Form.FormControlLabel, (0, _extends2.default)({}, getLabelProps(), {
        renderOptional: !required
      }), label);
    }

    if ((0, _react.isValidElement)(label) && label.type === _Form.FormControlLabel) {
      return (0, _react.cloneElement)(label, getLabelProps());
    }

    (0, _utils.warning)('label must be either a string or a FormControlLabel component.');
  }, [getLabelProps, label, required]);
  var renderToggle = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement(_styled.DropdownButton, (0, _extends2.default)({}, getToggleButtonProps({
      disabled: disabled,
      type: 'button'
    }), {
      "aria-label": "toggle menu",
      variant: "subtle"
    }), /*#__PURE__*/_react.default.createElement(_styled.StyledDropdownIcon, null));
  }, [disabled, getToggleButtonProps]);
  var renderInput = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement(_reactPopper.Reference, null, function (_ref2) {
      var ref = _ref2.ref;
      return /*#__PURE__*/_react.default.createElement(_styled.StyledInputContainer, {
        ref: ref
      }, /*#__PURE__*/_react.default.createElement(_Input.Input, (0, _extends2.default)({}, rest, getInputProps({
        autoComplete: 'no',
        disabled: disabled,
        onFocus: openMenu,
        onKeyDown: function onKeyDown(event) {
          switch (event.key) {
            case 'Enter':
              event.preventDefault();

              if (isOpen === false) {
                openMenu();
                event.nativeEvent.preventDownshiftDefault = true;
              }

              break;

            case 'Escape':
              if (isOpen === false) {
                // reset select
                onOptionChange();
                setHighlightedIndex(-1);
              } else {
                closeMenu();
              }

              event.nativeEvent.preventDownshiftDefault = true;
              break;
          }
        },
        placeholder: placeholder,
        ref: getInputRef()
      }), {
        iconRight: renderToggle,
        readOnly: !filterable,
        required: required
      })));
    });
  }, [closeMenu, disabled, filterable, getInputProps, getInputRef, isOpen, onOptionChange, openMenu, placeholder, renderToggle, required, rest]);
  var renderAction = (0, _react.useCallback)(function (actionItem) {
    var index = selectOptions.length - 1;
    var isHighlighted = highlightedIndex === index;
    var itemDisabled = actionItem.disabled,
        content = actionItem.content,
        icon = actionItem.icon,
        onActionClick = actionItem.onActionClick,
        itemProps = (0, _objectWithoutProperties2.default)(actionItem, ["disabled", "content", "icon", "onActionClick"]);
    return /*#__PURE__*/_react.default.createElement(_Box.Box, {
      borderTop: "box",
      marginTop: "xSmall",
      paddingTop: "xSmall",
      key: "".concat(content, "-").concat(index)
    }, /*#__PURE__*/_react.default.createElement(_Item2.ListItem, (0, _extends2.default)({}, itemProps, getItemProps({
      disabled: itemDisabled,
      index: index,
      item: actionItem
    }), {
      autoWidth: autoWidth,
      isAction: true,
      isHighlighted: isHighlighted
    }), getContent(actionItem, isHighlighted)));
  }, [getItemProps, autoWidth, highlightedIndex, selectOptions.length]);
  var renderOptions = (0, _react.useCallback)(function (items) {
    return items.map(function (item) {
      if (!selectOptions.find(function (option) {
        return 'value' in option && option.value === item.value;
      })) {
        return null;
      }

      var key = itemKey.current;
      itemKey.current += 1;
      var isHighlighted = highlightedIndex === key;
      var isSelected = selectedOption ? 'value' in item && selectedOption.value === item.value : false;
      var itemDisabled = item.disabled,
          content = item.content,
          icon = item.icon,
          itemProps = (0, _objectWithoutProperties2.default)(item, ["disabled", "content", "icon"]);
      return /*#__PURE__*/_react.default.createElement(_Item2.ListItem, (0, _extends2.default)({}, itemProps, getItemProps({
        disabled: itemDisabled,
        index: key,
        item: item
      }), {
        autoWidth: autoWidth,
        isHighlighted: isHighlighted,
        isSelected: isSelected,
        key: "".concat(content, "-").concat(key)
      }), getContent(item, isHighlighted), isSelected && /*#__PURE__*/_react.default.createElement(_bigDesignIcons.CheckIcon, {
        color: "primary",
        size: "large"
      }));
    });
  }, [getItemProps, autoWidth, highlightedIndex, selectedOption, selectOptions]);
  var renderGroup = (0, _react.useCallback)(function (group) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_GroupHeader.ListGroupHeader, null, group.label), renderOptions(group.options));
  }, [renderOptions]);
  var renderChildren = (0, _react.useMemo)(function () {
    itemKey.current = 0;

    if (Array.isArray(options) && options.every(isGroup)) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, options.map(function (group, index) {
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
          key: index
        }, renderGroup(group));
      }), action && renderAction(action));
    }

    if (Array.isArray(options) && options.every(function (item) {
      return 'value' in item && !('options' in item);
    })) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderOptions(options), action && renderAction(action));
    }
  }, [action, options, renderAction, renderGroup, renderOptions]);
  var renderList = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement(_reactPopper.Popper, {
      modifiers: [{
        name: 'offset',
        options: {
          offset: [0, 4]
        }
      }],
      placement: placement,
      strategy: positionFixed ? 'fixed' : 'absolute'
    }, function (_ref3) {
      var popperPlacement = _ref3.placement,
          ref = _ref3.ref,
          popperStyle = _ref3.style,
          update = _ref3.update;
      return /*#__PURE__*/_react.default.createElement(_List.List, (0, _extends2.default)({}, getMenuProps({
        ref: ref
      }), {
        "data-placement": popperPlacement,
        maxHeight: maxHeight,
        style: popperStyle,
        update: update
      }), renderChildren);
    });
  }, [getMenuProps, maxHeight, placement, positionFixed, renderChildren]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactPopper.Manager, null, renderLabel, /*#__PURE__*/_react.default.createElement("div", getComboboxProps(), renderInput), isOpen && renderList));
});
exports.Select = Select;

var flattenOptions = function flattenOptions(items) {
  return items.every(isGroup) ? items.map(function (group) {
    return group.options;
  }).reduce(function (acc, curr) {
    return acc.concat(curr);
  }, []) : items;
};

var isGroup = function isGroup(item) {
  return 'options' in item && !('value' in item);
};

var getContent = function getContent(item, isHighlighted) {
  var content = item.content,
      disabled = item.disabled,
      description = item.description,
      icon = item.icon;
  return /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    alignItems: "center",
    flexDirection: "row"
  }, icon && /*#__PURE__*/_react.default.createElement(_Item.FlexItem, {
    alignSelf: description ? 'flex-start' : undefined,
    paddingRight: "xSmall",
    paddingTop: description ? 'xSmall' : undefined
  }, renderIcon(item, isHighlighted)), description ? /*#__PURE__*/_react.default.createElement(_Item.FlexItem, {
    paddingVertical: "xSmall"
  }, content, /*#__PURE__*/_react.default.createElement(_Typography.Small, {
    color: descriptionColor(disabled)
  }, description)) : content);
};

var renderIcon = function renderIcon(item, isHighlighted) {
  return (0, _react.isValidElement)(item.icon) && (0, _react.cloneElement)(item.icon, {
    color: iconColor(item, isHighlighted),
    size: 'large'
  });
};

var iconColor = function iconColor(item, isHighlighted) {
  if (item.disabled) {
    return 'secondary40';
  }

  if (!isHighlighted || !('onActionClick' in item)) {
    return 'secondary60';
  }

  return 'actionType' in item ? item.actionType === 'destructive' ? 'danger50' : 'primary' : 'primary';
};

var descriptionColor = function descriptionColor(isDisabled) {
  return isDisabled ? 'secondary40' : 'secondary60';
};