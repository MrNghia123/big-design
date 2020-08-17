import { useCallback, useEffect, useRef } from 'react';
export function useEventCallback(fn) {
  var ref = useRef(fn); // TODO: Change to useIsomorphicLayoutEffect

  useEffect(function () {
    ref.current = fn;
  });
  return useCallback(function () {
    var fun = ref.current;
    return fun.apply(void 0, arguments);
  }, []);
}