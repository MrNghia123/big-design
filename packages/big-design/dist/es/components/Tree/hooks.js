import { useMemo } from 'react';
import { depthFirstSearch } from '../../utils';
export var useIsExpanded = function useIsExpanded(state, id) {
  return useMemo(function () {
    return state.expandedNodeIds.has(id);
  }, [id, state]);
};
export var useIsSelected = function useIsSelected(state, value) {
  return useMemo(function () {
    return value !== undefined && state.selectedValues.some(function (selectValue) {
      return selectValue.value === value;
    });
  }, [value, state]);
};
export var useSelectedChildrenCount = function useSelectedChildrenCount(state, children) {
  return useMemo(function () {
    if (children === null || children === void 0 ? void 0 : children.length) {
      var selectedChildren = depthFirstSearch(children, function (node) {
        return state.selectedValues.some(function (selected) {
          return selected.id === node.id;
        });
      }, false);
      return selectedChildren ? selectedChildren.length : 0;
    }

    return 0;
  }, [children, state.selectedValues]);
};