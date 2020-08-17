import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect } from 'react';
import { isClient } from '../utils';
import { useRafState } from './useRafState';
export var useWindowSize = function useWindowSize() {
  var _useRafState = useRafState({
    height: isClient ? window.innerHeight : -1,
    width: isClient ? window.innerWidth : -1
  }),
      _useRafState2 = _slicedToArray(_useRafState, 2),
      state = _useRafState2[0],
      setState = _useRafState2[1];

  useEffect(function () {
    var resizeHandler = function resizeHandler() {
      setState({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener('resize', resizeHandler);
    return function () {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [setState]);

  if (!isClient) {
    return state;
  }

  return state;
};