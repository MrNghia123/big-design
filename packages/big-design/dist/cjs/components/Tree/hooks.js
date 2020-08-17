"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectedChildrenCount = exports.useIsSelected = exports.useIsExpanded = void 0;

var _react = require("react");

var _utils = require("../../utils");

var useIsExpanded = function useIsExpanded(state, id) {
  return (0, _react.useMemo)(function () {
    return state.expandedNodeIds.has(id);
  }, [id, state]);
};

exports.useIsExpanded = useIsExpanded;

var useIsSelected = function useIsSelected(state, value) {
  return (0, _react.useMemo)(function () {
    return value !== undefined && state.selectedValues.some(function (selectValue) {
      return selectValue.value === value;
    });
  }, [value, state]);
};

exports.useIsSelected = useIsSelected;

var useSelectedChildrenCount = function useSelectedChildrenCount(state, children) {
  return (0, _react.useMemo)(function () {
    if (children === null || children === void 0 ? void 0 : children.length) {
      var selectedChildren = (0, _utils.depthFirstSearch)(children, function (node) {
        return state.selectedValues.some(function (selected) {
          return selected.id === node.id;
        });
      }, false);
      return selectedChildren ? selectedChildren.length : 0;
    }

    return 0;
  }, [children, state.selectedValues]);
};

exports.useSelectedChildrenCount = useSelectedChildrenCount;