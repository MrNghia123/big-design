import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { asyncToggle, getNextVisibleNode, getPreviousVisibleNode, initialize, toggleNode } from './reducer.utils';
export var createReducerInit = function createReducerInit() {
  return function (_ref) {
    var nodes = _ref.nodes,
        selectable = _ref.selectable;
    return initialize(nodes, selectable);
  };
};
export var createReducer = function createReducer() {
  return function (state, action) {
    switch (action.type) {
      case 'TOGGLE_NODE':
        return toggleNode(state, action);

      case 'ASYNC_TOGGLE':
        return asyncToggle(state, action);

      case 'FOCUS':
        return _objectSpread({}, state, {
          focusedNode: action.id
        });

      case 'FOCUS_DOWN':
        return _objectSpread({}, state, {
          focusedNode: getNextVisibleNode(state.visibleNodeIds, action.id)
        });

      case 'FOCUS_UP':
        return _objectSpread({}, state, {
          focusedNode: getPreviousVisibleNode(state.visibleNodeIds, action.id)
        });

      case 'FOCUS_FIRST':
        return _objectSpread({}, state, {
          focusedNode: state.visibleNodeIds[0]
        });

      case 'FOCUS_LAST':
        return _objectSpread({}, state, {
          focusedNode: state.visibleNodeIds[state.visibleNodeIds.length - 1]
        });

      case 'SELECTED_NODE':
        if (action.values) {
          return _objectSpread({}, state, {
            selectedValues: action.values
          });
        }

        return state;

      default:
        return state;
    }
  };
};