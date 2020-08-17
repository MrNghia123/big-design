import { useEffect, useLayoutEffect } from 'react';
import { isClient } from '../utils';
export var useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;