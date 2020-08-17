"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _reducer = require("./reducer");

var _styled = require("./styled");

var _TreeNode = require("./TreeNode");

var InternalTree = function InternalTree(_ref) {
  var iconless = _ref.iconless,
      initialNodes = _ref.initialNodes,
      onCollapse = _ref.onCollapse,
      onExpand = _ref.onExpand,
      onSelect = _ref.onSelect,
      selectable = _ref.selectable;

  var _useState = (0, _react.useState)(initialNodes),
      _useState2 = (0, _slicedToArray2.default)(_useState, 1),
      nodes = _useState2[0];

  var reducer = (0, _react.useMemo)(function () {
    return (0, _reducer.createReducer)();
  }, []);
  var reducerInit = (0, _react.useMemo)(function () {
    return (0, _reducer.createReducerInit)();
  }, []);

  var _useReducer = (0, _react.useReducer)(reducer, {
    nodes: nodes,
    selectable: selectable
  }, reducerInit),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var renderedItems = (0, _react.useMemo)(function () {
    return nodes.map(function (node, index) {
      return /*#__PURE__*/_react.default.createElement(_TreeNode.TreeNode, (0, _extends2.default)({}, node, {
        dispatch: dispatch,
        iconless: iconless,
        key: index,
        onCollapse: onCollapse,
        onExpand: onExpand,
        onSelect: onSelect,
        selectable: selectable,
        state: state
      }));
    });
  }, [iconless, nodes, onCollapse, onExpand, onSelect, selectable, state]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledUl, {
    role: "tree",
    "aria-multiselectable": selectable === 'multi',
    style: {
      overflow: 'hidden'
    }
  }, renderedItems);
};

var Tree = (0, _utils.typedMemo)(InternalTree);
exports.Tree = Tree;