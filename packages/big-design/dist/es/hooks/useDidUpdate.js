import { useEffect, useRef } from 'react';
export var useDidUpdate = function useDidUpdate(effect) {
  var isInitialRender = useRef(true);
  useEffect(function () {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else {
      effect();
    }
  }, [effect]);
};