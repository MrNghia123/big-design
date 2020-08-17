"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReducer = exports.createReducerInit = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reducer = require("./reducer.utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createReducerInit = function createReducerInit() {
  return function (_ref) {
    var nodes = _ref.nodes,
        selectable = _ref.selectable;
    return (0, _reducer.initialize)(nodes, selectable);
  };
};

exports.createReducerInit = createReducerInit;

var createReducer = function createReducer() {
  return function (state, action) {
    switch (action.type) {
      case 'TOGGLE_NODE':
        return (0, _reducer.toggleNode)(state, action);

      case 'ASYNC_TOGGLE':
        return (0, _reducer.asyncToggle)(state, action);

      case 'FOCUS':
        return _objectSpread({}, state, {
          focusedNode: action.id
        });

      case 'FOCUS_DOWN':
        return _objectSpread({}, state, {
          focusedNode: (0, _reducer.getNextVisibleNode)(state.visibleNodeIds, action.id)
        });

      case 'FOCUS_UP':
        return _objectSpread({}, state, {
          focusedNode: (0, _reducer.getPreviousVisibleNode)(state.visibleNodeIds, action.id)
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

exports.createReducer = createReducer;