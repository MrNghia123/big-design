"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var _Item2 = require("../List/Item");

var _CheckboxItem = require("../List/Item/CheckboxItem");

var _styled = require("../Select/styled");

var _Typography = require("../Typography");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MultiSelect = (0, _utils.typedMemo)(function (_ref) {
  var action = _ref.action,
      _ref$autoWidth = _ref.autoWidth,
      autoWidth = _ref$autoWidth === void 0 ? false : _ref$autoWidth,
      className = _ref.className,
      disabled = _ref.disabled,
      _ref$filterable = _ref.filterable,
      filterable = _ref$filterable === void 0 ? true : _ref$filterable,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      labelId = _ref.labelId,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? 250 : _ref$maxHeight,
      onOptionsChange = _ref.onOptionsChange,
      options = _ref.options,
      placeholder = _ref.placeholder,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
      _ref$positionFixed = _ref.positionFixed,
      positionFixed = _ref$positionFixed === void 0 ? false : _ref$positionFixed,
      required = _ref.required,
      style = _ref.style,
      value = _ref.value,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["action", "autoWidth", "className", "disabled", "filterable", "id", "inputRef", "label", "labelId", "maxHeight", "onOptionsChange", "options", "placeholder", "placement", "positionFixed", "required", "style", "value"]);
  // Merge options and action
  var initialOptions = (0, _react.useMemo)(function () {
    return action ? [].concat((0, _toConsumableArray2.default)(options), [action]) : options;
  }, [action, options]);
  var findSelectedOptions = (0, _react.useMemo)(function () {
    return initialOptions.filter(function (option) {
      return value && value.find(function (val) {
        return 'value' in option && val === option.value;
      }) !== undefined;
    });
  }, [initialOptions, value]);

  var _useState = (0, _react.useState)(initialOptions),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var _useState5 = (0, _react.useState)(findSelectedOptions),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      selectedOptions = _useState6[0],
      setSelectedOptions = _useState6[1];

  var defaultRef = (0, _react.createRef)();
  var multiSelectUniqueId = (0, _hooks.useUniqueId)('multi-select'); // Need to set items if options prop changes

  (0, _react.useEffect)(function () {
    return setItems(initialOptions);
  }, [initialOptions]);
  (0, _react.useEffect)(function () {
    setInputValue('');
  }, [selectedOptions]);
  (0, _react.useEffect)(function () {
    setSelectedOptions(findSelectedOptions);
  }, [findSelectedOptions]);

  var handleSetInputValue = function handleSetInputValue(changes) {
    if (filterable && changes.isOpen === true) {
      setItems(filterOptions(changes.inputValue));
    }

    setInputValue(changes.inputValue || '');
  };

  var filterOptions = function filterOptions() {
    var inputVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return initialOptions.filter(function (option) {
      return option === action || option.content.toLowerCase().includes(inputVal.trim().toLowerCase());
    });
  };

  var handleOnIsOpenChange = function handleOnIsOpenChange(changes) {
    if (filterable && changes.isOpen === false) {
      // Reset the items if filtered
      setItems(initialOptions);
    }
  };

  var handleOnSelectedItemChange = function handleOnSelectedItemChange(changes) {
    if (action && changes.selectedItem === action) {
      action.onActionClick(inputValue);
    }
  };

  var handleStateReducer = function handleStateReducer(state, actionAndChanges) {
    switch (actionAndChanges.type) {
      case _downshift.useCombobox.stateChangeTypes.InputBlur:
        return _objectSpread({}, actionAndChanges.changes, {
          inputValue: ''
        });

      case _downshift.useCombobox.stateChangeTypes.InputKeyDownEnter:
      case _downshift.useCombobox.stateChangeTypes.ItemClick:
        {
          if (!actionAndChanges.changes.selectedItem) {
            return actionAndChanges.changes;
          } // Prevent action from changing the input value


          if (actionAndChanges.changes.selectedItem === action) {
            return _objectSpread({}, actionAndChanges.changes, {
              inputValue: state.inputValue
            });
          }

          var isChecked = Boolean(selectedOptions.find(function (i) {
            return actionAndChanges.changes.selectedItem && 'value' in actionAndChanges.changes.selectedItem && i.value === actionAndChanges.changes.selectedItem.value;
          }));
          isChecked ? removeItem(actionAndChanges.changes.selectedItem) : addSelectedItem(actionAndChanges.changes.selectedItem);
          return _objectSpread({}, actionAndChanges.changes, {
            highlightedIndex: state.highlightedIndex,
            inputValue: '',
            isOpen: true
          });
        }

      default:
        return actionAndChanges.changes;
    }
  };

  var removeItem = (0, _react.useCallback)(function (item) {
    if (!item) {
      return;
    }

    var newOptions = selectedOptions.filter(function (i) {
      return i.value !== item.value;
    });
    onOptionsChange(newOptions.map(function (option) {
      return option.value;
    }), newOptions);
    setItems(initialOptions);
  }, [initialOptions, onOptionsChange, selectedOptions]);
  var addSelectedItem = (0, _react.useCallback)(function (item) {
    if (!item) {
      return;
    }

    var newOptions = [].concat((0, _toConsumableArray2.default)(selectedOptions), [item]);
    onOptionsChange(newOptions.map(function (option) {
      return option.value;
    }), newOptions);
    setItems(initialOptions);
  }, [initialOptions, onOptionsChange, selectedOptions]);

  var _useCombobox = (0, _downshift.useCombobox)({
    id: multiSelectUniqueId,
    inputId: id,
    inputValue: inputValue,
    itemToString: function itemToString(option) {
      return option ? option.content : '';
    },
    items: items,
    labelId: labelId,
    onInputValueChange: handleSetInputValue,
    onIsOpenChange: handleOnIsOpenChange,
    onSelectedItemChange: handleOnSelectedItemChange,
    selectedItem: null,
    stateReducer: handleStateReducer
  }),
      getComboboxProps = _useCombobox.getComboboxProps,
      getInputProps = _useCombobox.getInputProps,
      getItemProps = _useCombobox.getItemProps,
      getLabelProps = _useCombobox.getLabelProps,
      getMenuProps = _useCombobox.getMenuProps,
      getToggleButtonProps = _useCombobox.getToggleButtonProps,
      highlightedIndex = _useCombobox.highlightedIndex,
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
            case 'Backspace':
              if (!inputValue) {
                removeItem(selectedOptions[selectedOptions.length - 1]);
              }

              break;

            case 'Enter':
              event.preventDefault();

              if (isOpen === false) {
                openMenu();
                event.nativeEvent.preventDownshiftDefault = true;
              }

              break;

            case 'Escape':
              // Reset select
              if (isOpen === false) {
                onOptionsChange([], []);
              }

              break;
          }
        },
        placeholder: placeholder,
        ref: getInputRef()
      }), {
        chips: selectedOptions.map(function (option) {
          return {
            label: option.content,
            onDelete: function onDelete() {
              return removeItem(option);
            }
          };
        }),
        autoComplete: "no",
        iconRight: renderToggle,
        readOnly: !filterable,
        required: required
      })));
    });
  }, [disabled, filterable, getInputProps, getInputRef, inputValue, isOpen, onOptionsChange, openMenu, placeholder, removeItem, renderToggle, required, rest, selectedOptions]);
  var renderAction = (0, _react.useCallback)(function (actionItem) {
    var index = options.length;
    var isHighlighted = highlightedIndex === index;
    var content = actionItem.content,
        itemDisabled = actionItem.disabled,
        icon = actionItem.icon,
        onActionClick = actionItem.onActionClick,
        itemProps = (0, _objectWithoutProperties2.default)(actionItem, ["content", "disabled", "icon", "onActionClick"]);
    return /*#__PURE__*/_react.default.createElement(_Box.Box, {
      borderTop: "box",
      marginTop: "xSmall",
      paddingTop: "xSmall",
      key: "".concat(content, "-").concat(index)
    }, /*#__PURE__*/_react.default.createElement(_Item2.ListItem, (0, _extends2.default)({}, itemProps, getItemProps({
      disabled: itemDisabled,
      item: actionItem,
      index: index
    }), {
      autoWidth: autoWidth,
      isAction: true,
      isHighlighted: isHighlighted
    }), getContent(actionItem, isHighlighted)));
  }, [getItemProps, autoWidth, highlightedIndex, options.length]);
  var renderOptions = (0, _react.useMemo)(function () {
    return items.map(function (item, index) {
      if (action && item.content === action.content) {
        return renderAction(item);
      }

      var isHighlighted = highlightedIndex === index;
      var isChecked = 'value' in item && Boolean(selectedOptions.find(function (i) {
        return i.value === item.value;
      }));
      var _ref3 = item,
          content = _ref3.content,
          itemDisabled = _ref3.disabled,
          icon = _ref3.icon,
          itemProps = (0, _objectWithoutProperties2.default)(_ref3, ["content", "disabled", "icon"]);
      return /*#__PURE__*/_react.default.createElement(_CheckboxItem.ListItemCheckbox, (0, _extends2.default)({}, itemProps, getItemProps({
        disabled: itemDisabled,
        item: item,
        index: index
      }), {
        autoWidth: autoWidth,
        checked: isChecked,
        description: item.description,
        isHighlighted: isHighlighted,
        key: "".concat(content, "-").concat(index),
        label: item.content,
        onClick: function onClick() {
          if (itemDisabled) {
            return;
          }

          isChecked ? removeItem(item) : addSelectedItem(item);
        }
      }));
    });
  }, [action, addSelectedItem, getItemProps, autoWidth, highlightedIndex, items, removeItem, renderAction, selectedOptions]);
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
    }, function (_ref4) {
      var popperPlacement = _ref4.placement,
          ref = _ref4.ref,
          popperStyle = _ref4.style,
          update = _ref4.update;
      return /*#__PURE__*/_react.default.createElement(_List.List, (0, _extends2.default)({}, getMenuProps({
        ref: ref
      }), {
        "data-placement": popperPlacement,
        maxHeight: maxHeight,
        style: popperStyle,
        update: update
      }), renderOptions);
    });
  }, [getMenuProps, maxHeight, placement, positionFixed, renderOptions]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactPopper.Manager, null, renderLabel, /*#__PURE__*/_react.default.createElement("div", getComboboxProps(), renderInput), isOpen && renderList));
});
exports.MultiSelect = MultiSelect;

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