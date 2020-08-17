"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlertsManager = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AlertsManager = /*#__PURE__*/function () {
  function AlertsManager() {
    var _this = this;

    (0, _classCallCheck2.default)(this, AlertsManager);
    (0, _defineProperty2.default)(this, "alerts", []);
    (0, _defineProperty2.default)(this, "counter", 0);
    (0, _defineProperty2.default)(this, "subscribers", []);
    (0, _defineProperty2.default)(this, "typeMap", {
      error: 0,
      warning: 1,
      success: 2,
      info: 3
    });
    (0, _defineProperty2.default)(this, "add", function (alert) {
      if (alert.key && _this.containsKey(alert.key)) {
        _this.remove(alert.key);
      }

      var key = alert.key === undefined ? _this.getUniqueId() : alert.key;

      var onClose = function onClose() {
        if (typeof alert.onClose === 'function') {
          alert.onClose();
        }

        _this.remove(key);
      };

      var newAlert = _objectSpread({}, alert, {
        key: key,
        onClose: onClose
      });

      _this.alerts = _this.alerts.concat([newAlert]).sort(_this.sortAlerts);

      _this.notifySubscribers();

      if (alert.fadeAway) {
        setTimeout(onClose, 5000);
      }

      return key;
    });
    (0, _defineProperty2.default)(this, "clear", function () {
      var removed = _this.alerts;
      _this.alerts = [];

      _this.notifySubscribers();

      return removed;
    });
    (0, _defineProperty2.default)(this, "remove", function (key) {
      var removed;
      _this.alerts = _this.alerts.reduce(function (acc, alert) {
        if (alert.key === key) {
          removed = alert;
          return acc;
        }

        return [].concat((0, _toConsumableArray2.default)(acc), [alert]);
      }, []);

      _this.notifySubscribers();

      return removed;
    });
    (0, _defineProperty2.default)(this, "subscribe", function (subscriber) {
      _this.subscribers.push(subscriber);

      return function () {
        _this.subscribers = _this.subscribers.filter(function (sub) {
          return sub !== subscriber;
        });
      };
    });
    (0, _defineProperty2.default)(this, "sortAlerts", function (a, b) {
      return _this.typeMap[a.type] - _this.typeMap[b.type];
    });
  }

  (0, _createClass2.default)(AlertsManager, [{
    key: "notifySubscribers",
    value: function notifySubscribers() {
      var _this2 = this;

      this.subscribers.forEach(function (subscriber) {
        return subscriber(_this2.alerts[0] || null);
      });
    }
  }, {
    key: "getUniqueId",
    value: function getUniqueId() {
      this.counter += 1;
      return "alert-".concat(this.counter);
    }
  }, {
    key: "containsKey",
    value: function containsKey(key) {
      return !!this.alerts.find(function (alert) {
        return alert.key === key;
      });
    }
  }]);
  return AlertsManager;
}();

var createAlertsManager = function createAlertsManager() {
  return new AlertsManager();
};

exports.createAlertsManager = createAlertsManager;