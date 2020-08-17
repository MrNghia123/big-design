import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useCallback, useEffect, useRef, useState } from 'react';
export var useRafState = function useRafState(initialState) {
  var frame = useRef(0);

  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setRafState = useCallback(function (value) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function () {
      setState(value);
    });
  }, []);
  useEffect(function () {
    return function () {
      return cancelAnimationFrame(frame.current);
    };
  }, []);
  return [state, setRafState];
};