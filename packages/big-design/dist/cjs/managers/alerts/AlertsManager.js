"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertsManager = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("../../components");

var AlertsManager = function AlertsManager(_ref) {
  var manager = _ref.manager;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      alert = _useState2[0],
      setAlert = _useState2[1];

  (0, _react.useEffect)(function () {
    return manager.subscribe(setAlert);
  }, [manager]);
  return alert ? /*#__PURE__*/_react.default.createElement(_components.Alert, alert) : null;
};

exports.AlertsManager = AlertsManager;