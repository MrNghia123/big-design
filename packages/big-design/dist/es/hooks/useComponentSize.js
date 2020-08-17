import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useCallback, useEffect } from 'react';
import { useRafState } from './useRafState';

var getSize = function getSize(element) {
  return {
    height: element ? element.offsetHeight : 0,
    width: element ? element.offsetWidth : 0
  };
};

export var useComponentSize = function useComponentSize(ref) {
  var _useRafState = useRafState(getSize(ref.current)),
      _useRafState2 = _slicedToArray(_useRafState, 2),
      size = _useRafState2[0],
      setSize = _useRafState2[1];

  var handleResize = useCallback(function () {
    if (ref.current) {
      setSize(getSize(ref.current));
    }
  }, [ref, setSize]);
  useEffect(function () {
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