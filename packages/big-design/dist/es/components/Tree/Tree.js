import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useMemo, useReducer, useState } from 'react';
import { typedMemo } from '../../utils';
import { createReducer, createReducerInit } from './reducer';
import { StyledUl } from './styled';
import { TreeNode } from './TreeNode';

var InternalTree = function InternalTree(_ref) {
  var iconless = _ref.iconless,
      initialNodes = _ref.initialNodes,
      onCollapse = _ref.onCollapse,
      onExpand = _ref.onExpand,
      onSelect = _ref.onSelect,
      selectable = _ref.selectable;

  var _useState = useState(initialNodes),
      _useState2 = _slicedToArray(_useState, 1),
      nodes = _useState2[0];

  var reducer = useMemo(function () {
    return createReducer();
  }, []);
  var reducerInit = useMemo(function () {
    return createReducerInit();
  }, []);

  var _useReducer = useReducer(reducer, {
    nodes: nodes,
    selectable: selectable
  }, reducerInit),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var renderedItems = useMemo(function () {
    return nodes.map(function (node, index) {
      return /*#__PURE__*/React.createElement(TreeNode, _extends({}, node, {
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
  return /*#__PURE__*/React.createElement(StyledUl, {
    role: "tree",
    "aria-multiselectable": selectable === 'multi',
    style: {
      overflow: 'hidden'
    }
  }, renderedItems);
};

export var Tree = typedMemo(InternalTree);