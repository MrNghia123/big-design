"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useComponentSize = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useRafState3 = require("./useRafState");

var getSize = function getSize(element) {
  return {
    height: element ? element.offsetHeight : 0,
    width: element ? element.offsetWidth : 0
  };
};

var useComponentSize = function useComponentSize(ref) {
  var _useRafState = (0, _useRafState3.useRafState)(getSize(ref.current)),
      _useRafState2 = (0, _slicedToArray2.default)(_useRafState, 2),
      size = _useRafState2[0],
      setSize = _useRafState2[1];

  var handleResize = (0, _react.useCallback)(function () {
    if (ref.current) {
      setSize(getSize(ref.current));
    }
  }, [ref, setSize]);
  (0, _react.useEffect)(function () {
    if (!ref.current) {
      return;
    }

    handleResize();

    if (typeof MutationObserver === 'function') {
      var observer = new MutationObserver(handleResize);
      observer.observe(ref.current, {
        childList: true
      });
      return function () {
        observer.disconnect();
      };
    }
  }, [ref, handleResize]);
  return size;
};

exports.useComponentSize = useComponentSize;