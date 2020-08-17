import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { depthFirstSearch } from '../../utils';
export var initialize = function initialize(nodes, selectable) {
  var state = recursiveInitialize(nodes, {
    nodeMap: new Map(),
    expandedNodeIds: new Set(),
    flattenedNodeIds: [],
    focusedNode: null,
    selectedValues: [],
    visibleNodeIds: []
  }, selectable);
  var selectedValues;
  var focusedNode;

  if (!state.selectedValues.length) {
    var _nodes$;

    if (selectable === 'radio') {
      var node = depthFirstSearch(nodes, function (node) {
        return node.value !== undefined;
      });

      if (node && node.value !== undefined) {
        selectedValues = [{
          id: node.id,
          value: node.value
        }];
        focusedNode = node.id;
      }
    }

    if (state.focusedNode === null && (nodes === null || nodes === void 0 ? void 0 : nodes.length) && ((_nodes$ = nodes[0]) === null || _nodes$ === void 0 ? void 0 : _nodes$.id) !== undefined) {
      focusedNode = nodes[0].id;
    }
  }

  return _objectSpread({}, state, {
    selectedValues: selectedValues !== undefined ? selectedValues : state.selectedValues,
    focusedNode: focusedNode !== undefined ? focusedNode : state.focusedNode
  });
};

var recursiveInitialize = function recursiveInitialize(nodes, state, selectable) {
  if (!nodes || nodes.length < 1) {
    return state;
  } // Order of statements in this loop is important.


  return nodes.reduce(function (acc, node) {
    var _node$children;

    var parent = getParentId(acc.nodeMap, node.id);
    var nodeMap = new Map(acc.nodeMap);
    var flattenedNodeIds = [].concat(_toConsumableArray(acc.flattenedNodeIds), [node.id]);
    var expandedNodeIds = new Set(acc.expandedNodeIds);
    var visibleNodeIds;
    var selectedValues;
    var focusedNode;
    nodeMap.set(node.id, {
      children: new Set((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.map(function (child) {
        return child.id;
      })),
      id: node.id,
      parent: parent
    });

    if (node.expanded) {
      expandedNodeIds.add(node.id);
    }

    if (parent !== undefined && expandedNodeIds.has(parent) || parent === undefined) {
      visibleNodeIds = [].concat(_toConsumableArray(acc.visibleNodeIds), [node.id]);
    }

    if (node.selected && node.value !== undefined) {
      if (selectable === 'radio' && !acc.selectedValues.length) {
        selectedValues = [{
          id: node.id,
          value: node.value
        }];
        focusedNode = node.id;
      } else if (selectable === 'multi') {
        selectedValues = [].concat(_toConsumableArray(acc.selectedValues), [{
          id: node.id,
          value: node.value
        }]);

        if (acc.focusedNode === null) {
          focusedNode = node.id;
        }
      }
    }

    var newState = _objectSpread({}, acc, {
      nodeMap: nodeMap,
      flattenedNodeIds: flattenedNodeIds,
      expandedNodeIds: expandedNodeIds,
      visibleNodeIds: visibleNodeIds !== undefined ? visibleNodeIds : acc.visibleNodeIds,
      selectedValues: selectedValues !== undefined ? selectedValues : acc.selectedValues,
      focusedNode: focusedNode !== undefined ? focusedNode : acc.focusedNode
    });

    if (node.children && node.children.length > 0) {
      return recursiveInitialize(node.children, newState, selectable);
    }

    return newState;
  }, state);
};

var getParentId = function getParentId(nodeMap, id) {
  var iterator = nodeMap.entries();

  var _iterator = _createForOfIteratorHelper(iterator),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          value = _step$value[1];

      if (value.children && value.children.has(id)) {
        return value.id;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return undefined;
};

export var getNextVisibleNode = function getNextVisibleNode(visibleNodeIds, id) {
  var index = visibleNodeIds.indexOf(id);

  if (index !== -1 && index + 1 < visibleNodeIds.length) {
    return visibleNodeIds[index + 1];
  }

  return id;
};
export var getPreviousVisibleNode = function getPreviousVisibleNode(visibleNodeIds, id) {
  var index = visibleNodeIds.indexOf(id);

  if (index !== -1 && index - 1 >= 0) {
    return visibleNodeIds[index - 1];
  }

  return id;
};
export var toggleNode = function toggleNode(state, action) {
  var node = state.nodeMap.get(action.id);
  var expandedNodeIds = new Set(state.expandedNodeIds);

  var visibleNodeIds = _toConsumableArray(state.visibleNodeIds);

  if (state.expandedNodeIds.has(action.id)) {
    expandedNodeIds.delete(action.id);
    node === null || node === void 0 ? void 0 : node.children.forEach(function (childId) {
      var index = visibleNodeIds.indexOf(childId);

      if (index > -1) {
        visibleNodeIds.splice(index, 1);
      }
    });
  } else {
    var _node$children2;

    expandedNodeIds.add(action.id);
    visibleNodeIds.splice.apply(visibleNodeIds, [visibleNodeIds.indexOf(action.id) + 1, 0].concat(_toConsumableArray(Array.from((_node$children2 = node === null || node === void 0 ? void 0 : node.children) !== null && _node$children2 !== void 0 ? _node$children2 : []))));
  }

  return _objectSpread({}, state, {
    expandedNodeIds: expandedNodeIds,
    visibleNodeIds: visibleNodeIds
  });
};
export var asyncToggle = function asyncToggle(state, action) {
  var children = action.children,
      id = action.id,
      radio = action.radio;
  return recursiveToggle(state, radio, id, children);
};
export var recursiveToggle = function recursiveToggle(state, radio, id, children) {
  if (!children) {
    return state;
  }

  var parentNode = state.nodeMap.get(id);
  var parentIndex = state.flattenedNodeIds.indexOf(id);
  var childrenIds = children.map(function (_ref) {
    var id = _ref.id;
    return id;
  });
  var expandedNodeIds = new Set(state.expandedNodeIds);

  var flattenedNodeIds = _toConsumableArray(state.flattenedNodeIds);

  var visibleNodeIds = _toConsumableArray(state.visibleNodeIds);

  var nodeMap = new Map(state.nodeMap);

  var selectedValues = _toConsumableArray(state.selectedValues);

  flattenedNodeIds.splice.apply(flattenedNodeIds, [parentIndex + 1, 0].concat(_toConsumableArray(childrenIds.filter(function (childId) {
    return !flattenedNodeIds.includes(childId);
  }))));
  visibleNodeIds.splice.apply(visibleNodeIds, [parentIndex + 1, 0].concat(_toConsumableArray(childrenIds.filter(function (childId) {
    return !visibleNodeIds.includes(childId);
  }))));

  if (parentNode === null || parentNode === void 0 ? void 0 : parentNode.children) {
    nodeMap.set(id, _objectSpread({}, parentNode, {
      children: new Set(childrenIds)
    }));
  }

  return children.reduce(function (acc, child) {
    var _child$children;

    nodeMap.set(child.id, {
      children: new Set((_child$children = child.children) === null || _child$children === void 0 ? void 0 : _child$children.map(function (_ref2) {
        var childId = _ref2.id;
        return childId;
      })),
      id: child.id,
      parent: getParentId(nodeMap, child.id)
    });

    if (child.expanded) {
      expandedNodeIds.add(child.id);
    }

    if (child.selected && child.value !== undefined && (!radio || selectedValues.length === 0)) {
      selectedValues = [].concat(_toConsumableArray(selectedValues), [{
        id: child.id,
        value: child.value
      }]);
    }

    var newState = _objectSpread({}, acc, {
      nodeMap: nodeMap,
      flattenedNodeIds: flattenedNodeIds,
      expandedNodeIds: expandedNodeIds,
      visibleNodeIds: visibleNodeIds,
      selectedValues: selectedValues
    });

    if (child.children && child.children.length > 0) {
      return recursiveToggle(newState, radio, child.id, child.children);
    }

    return newState;
  }, state);
};