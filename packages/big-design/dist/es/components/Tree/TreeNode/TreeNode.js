import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { CheckIcon, ChevronRightIcon, FolderIcon } from '@bigcommerce/big-design-icons';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { typedMemo } from '../../../utils';
import { StyledCheckbox } from '../../Checkbox/private';
import { StyledRadio } from '../../Radio/styled';
import { DelayedSpinner } from '../DelayedSpinner';
import { useIsExpanded, useIsSelected, useSelectedChildrenCount } from '../hooks';
import { StyledUl } from '../styled';
import { StyledArrowWrapper, StyledFlex, StyledFlexItem, StyledGap, StyledLi, StyledSelectableWrapper, StyledText } from './styled';
var flexItemProps = {
  flexShrink: 0,
  marginLeft: 'xxSmall'
};

var InternalTreeNode = function InternalTreeNode(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      dispatch = _ref.dispatch,
      icon = _ref.icon,
      iconless = _ref.iconless,
      id = _ref.id,
      label = _ref.label,
      onCollapse = _ref.onCollapse,
      onExpand = _ref.onExpand,
      onSelect = _ref.onSelect,
      selectable = _ref.selectable,
      state = _ref.state,
      value = _ref.value;
  var thisRef = useRef({
    children: children
  });
  var nodeRef = useRef(null);
  var selectableRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var expanded = useIsExpanded(state, id);
  var selected = useIsSelected(state, value);
  var selectedChildrenCount = useSelectedChildrenCount(state, children); // Could be multiple elements in which are clicked.
  // Typing to generic Element type since all other elements extend from it.

  var handleNodeToggle = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
      var _selectableRef$curren;

      var callbackValue, _callbackValue;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: 'FOCUS',
                id: id
              }); // Prevents the collapse/expand when clicking on a radio or checkbox
              // Checks to see if every element inside the selectableRef gets clicked.

              if (!((e === null || e === void 0 ? void 0 : e.target) instanceof Node && ((_selectableRef$curren = selectableRef.current) === null || _selectableRef$curren === void 0 ? void 0 : _selectableRef$curren.contains(e === null || e === void 0 ? void 0 : e.target)) || thisRef.current.children === undefined)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              dispatch({
                type: 'TOGGLE_NODE',
                id: id
              });

              if (!expanded) {
                _context.next = 12;
                break;
              }

              if (!(typeof onCollapse === 'function')) {
                _context.next = 10;
                break;
              }

              _context.next = 8;
              return onCollapse({
                children: thisRef.current.children,
                disabled: disabled,
                expanded: expanded,
                id: id,
                label: label,
                selected: selected,
                value: value
              });

            case 8:
              callbackValue = _context.sent;

              if (callbackValue) {
                thisRef.current = callbackValue;
              }

            case 10:
              _context.next = 19;
              break;

            case 12:
              if (!(typeof onExpand === 'function')) {
                _context.next = 19;
                break;
              }

              setIsLoading(true);
              _context.next = 16;
              return onExpand({
                children: thisRef.current.children,
                disabled: disabled,
                expanded: expanded,
                id: id,
                label: label,
                selected: selected,
                value: value
              });

            case 16:
              _callbackValue = _context.sent;

              if (_callbackValue) {
                thisRef.current = _callbackValue;
                dispatch({
                  type: 'ASYNC_TOGGLE',
                  radio: selectable === 'radio',
                  id: id,
                  children: thisRef.current.children
                });
              }

              setIsLoading(false);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleNodeToggle(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleNodeSelected = useCallback(function () {
    if (selectable === undefined || value === undefined || disabled) {
      return;
    }

    var newSelectedValues = _toConsumableArray(state.selectedValues);

    if (selectable === 'multi') {
      if (newSelectedValues.some(function (selectedValue) {
        return selectedValue.value === value;
      })) {
        newSelectedValues = newSelectedValues.filter(function (selectedValue) {
          return selectedValue.value !== value;
        });
      } else {
        newSelectedValues = [].concat(_toConsumableArray(newSelectedValues), [{
          id: id,
          value: value
        }]);
      }

      if (typeof onSelect === 'function') {
        onSelect(Array.from(newSelectedValues));
      }
    }

    if (selectable === 'radio') {
      newSelectedValues = [{
        id: id,
        value: value
      }];

      if (typeof onSelect === 'function') {
        onSelect(newSelectedValues[0]);
      }
    }

    dispatch({
      type: 'SELECTED_NODE',
      values: newSelectedValues
    });
  }, [disabled, dispatch, id, onSelect, selectable, state.selectedValues, value]); // Needs to handle the following keyboard events:
  // https://www.w3.org/TR/wai-aria-practices/#keyboard-interaction-22

  var handleKeyEvent = function handleKeyEvent(e) {
    var _thisRef$current, _thisRef$current2, _state$nodeMap$get;

    var key = e.key;

    if (e.altKey || e.currentTarget !== e.target) {
      return;
    }

    switch (key) {
      // Stopping propagation if inside a form
      case ' ':
        e.preventDefault();
        e.stopPropagation();
        handleNodeSelected();
        break;

      case 'Enter':
        e.preventDefault();
        e.stopPropagation();

        if (nodeRef.current === e.currentTarget) {
          if (thisRef.current.children) {
            handleNodeToggle();
          } else if (selectable) {
            handleNodeSelected();
          }
        }

        break;

      case 'ArrowDown':
        e.preventDefault();
        dispatch({
          type: 'FOCUS_DOWN',
          id: id
        });
        break;

      case 'ArrowUp':
        e.preventDefault();
        dispatch({
          type: 'FOCUS_UP',
          id: id
        });
        break;

      case 'ArrowRight':
        e.preventDefault();

        if ((_thisRef$current = thisRef.current) === null || _thisRef$current === void 0 ? void 0 : _thisRef$current.children) {
          if (expanded) {
            dispatch({
              type: 'FOCUS_DOWN',
              id: id
            });
          } else {
            handleNodeToggle();
          }
        }

        break;

      case 'ArrowLeft':
        e.preventDefault();

        if ((_thisRef$current2 = thisRef.current) === null || _thisRef$current2 === void 0 ? void 0 : _thisRef$current2.children) {
          if (expanded) {
            handleNodeToggle();
            break;
          }
        }

        if (((_state$nodeMap$get = state.nodeMap.get(id)) === null || _state$nodeMap$get === void 0 ? void 0 : _state$nodeMap$get.parent) !== undefined) {
          dispatch({
            type: 'FOCUS_UP',
            id: id
          });
        }

        break;

      case 'Home':
        e.preventDefault();
        dispatch({
          type: 'FOCUS_FIRST'
        });
        break;

      case 'End':
        e.preventDefault();
        dispatch({
          type: 'FOCUS_LAST'
        });
        break;

      default:
        break;
    }
  };

  var additionalProps = useMemo(function () {
    return selectable ? {
      'aria-selected': selected
    } : {};
  }, [selectable, selected]);
  var renderedArrow = useMemo(function () {
    return thisRef.current.children ? /*#__PURE__*/React.createElement(StyledArrowWrapper, {
      expanded: expanded,
      flexShrink: 0
    }, /*#__PURE__*/React.createElement(ChevronRightIcon, {
      color: "secondary60",
      focusable: false,
      size: "xLarge"
    })) : /*#__PURE__*/React.createElement(StyledGap, null);
  }, [expanded]);
  var renderedChildren = useMemo(function () {
    var _thisRef$current$chil;

    return thisRef.current.children && expanded && /*#__PURE__*/React.createElement(StyledUl, {
      role: "group"
    }, isLoading && thisRef.current.children.length < 1 ? /*#__PURE__*/React.createElement(TreeNode, {
      id: -1,
      label: "",
      icon: /*#__PURE__*/React.createElement(DelayedSpinner, null),
      dispatch: dispatch,
      selectable: selectable,
      state: state
    }) : (_thisRef$current$chil = thisRef.current.children) === null || _thisRef$current$chil === void 0 ? void 0 : _thisRef$current$chil.map(function (child, index) {
      return /*#__PURE__*/React.createElement(TreeNode, _extends({}, child, {
        dispatch: dispatch,
        iconless: iconless,
        key: index,
        onCollapse: onCollapse,
        onExpand: onExpand,
        onSelect: onSelect,
        selectable: selectable,
        state: state
      }));
    }));
  }, [dispatch, expanded, iconless, isLoading, onCollapse, onExpand, onSelect, selectable, state]);
  var renderedIcon = useMemo(function () {
    if (iconless) {
      return null;
    }

    return icon ? /*#__PURE__*/React.createElement(StyledFlexItem, flexItemProps, icon) : /*#__PURE__*/React.createElement(StyledFlexItem, flexItemProps, /*#__PURE__*/React.createElement(FolderIcon, {
      color: disabled ? 'primary20' : 'primary30',
      size: "xLarge"
    }));
  }, [disabled, icon, iconless]);
  var renderedSelectable = useMemo(function () {
    if (value === undefined && selectable !== undefined) {
      return null;
    }

    if (selectable === 'radio') {
      return /*#__PURE__*/React.createElement(StyledSelectableWrapper, flexItemProps, /*#__PURE__*/React.createElement(StyledRadio, {
        "aria-hidden": true,
        checked: selected,
        disabled: disabled,
        onClick: handleNodeSelected,
        ref: selectableRef
      }));
    }

    if (selectable === 'multi') {
      return /*#__PURE__*/React.createElement(StyledSelectableWrapper, flexItemProps, /*#__PURE__*/React.createElement(StyledCheckbox, {
        "aria-hidden": true,
        checked: selected,
        disabled: disabled,
        onClick: handleNodeSelected,
        ref: selectableRef
      }, selected ? /*#__PURE__*/React.createElement(CheckIcon, null) : null));
    }
  }, [disabled, handleNodeSelected, selected, selectable, value]);
  useEffect(function () {
    if (state.focusedNode === id) {
      var _nodeRef$current;

      nodeRef === null || nodeRef === void 0 ? void 0 : (_nodeRef$current = nodeRef.current) === null || _nodeRef$current === void 0 ? void 0 : _nodeRef$current.focus();
    }
  }, [state.focusedNode, id]);
  return /*#__PURE__*/React.createElement(StyledLi, _extends({
    "aria-expanded": expanded,
    onKeyDown: handleKeyEvent,
    ref: nodeRef,
    role: "treeitem",
    tabIndex: state.focusedNode === id ? 0 : -1
  }, additionalProps), /*#__PURE__*/React.createElement(StyledFlex, {
    alignItems: "center",
    flexDirection: "row",
    onClick: handleNodeToggle,
    selected: selected
  }, renderedArrow, renderedSelectable, renderedIcon, /*#__PURE__*/React.createElement(StyledText, {
    as: "span",
    ellipsis: true,
    marginLeft: "xxSmall",
    color: disabled ? 'secondary50' : 'secondary70'
  }, label, selectedChildrenCount ? /*#__PURE__*/React.createElement(StyledText, {
    as: "span",
    color: "primary"
  }, ' ', "(", selectedChildrenCount, ")") : null)), renderedChildren);
};

export var TreeNode = typedMemo(InternalTreeNode);