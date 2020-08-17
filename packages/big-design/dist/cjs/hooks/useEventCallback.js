"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEventCallback = useEventCallback;

var _react = require("react");

function useEventCallback(fn) {
  var ref = (0, _react.useRef)(fn); // TODO: Change to useIsomorphicLayoutEffect

  (0, _react.useEffect)(function () {
    ref.current = fn;
  });
  return (0, _react.useCallback)(function () {
    var fun = ref.current;
    return fun.apply(void 0, arguments);
  }, []);
}