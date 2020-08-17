import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import { Alert } from '../../components';
export var AlertsManager = function AlertsManager(_ref) {
  var manager = _ref.manager;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      alert = _useState2[0],
      setAlert = _useState2[1];

  useEffect(function () {
    return manager.subscribe(setAlert);
  }, [manager]);
  return alert ? /*#__PURE__*/React.createElement(Alert, alert) : null;
};