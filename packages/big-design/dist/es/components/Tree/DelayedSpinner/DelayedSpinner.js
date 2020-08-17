import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { ProgressCircle } from '../../ProgressCircle';
export var DelayedSpinner = function DelayedSpinner() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  useEffect(function () {
    // 50ms is a good middleground for the human eye
    // to not regonized a flash.
    var timeoutId = setTimeout(function () {
      return setShow(true);
    }, 50);
    return function () {
      return clearInterval(timeoutId);
    };
  }, []);
  return show ? /*#__PURE__*/React.createElement(ProgressCircle, {
    size: "xSmall"
  }) : null;
};