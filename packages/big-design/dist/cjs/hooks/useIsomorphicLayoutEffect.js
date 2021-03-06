"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsomorphicLayoutEffect = void 0;

var _react = require("react");

var _utils = require("../utils");

var useIsomorphicLayoutEffect = _utils.isClient ? _react.useLayoutEffect : _react.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;