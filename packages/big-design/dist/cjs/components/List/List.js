"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("../../hooks");

var _styled = require("./styled");

var StyleableList = function StyleableList(_ref) {
  var forwardedRef = _ref.forwardedRef,
      update = _ref.update,
      props = (0, _objectWithoutProperties2.default)(_ref, ["forwardedRef", "update"]);

  var _useWindowSize = (0, _hooks.useWindowSize)(),
      height = _useWindowSize.height,
      width = _useWindowSize.width;

  (0, _hooks.useIsomorphicLayoutEffect)(function () {
    function scheduleUpdate() {
      return _scheduleUpdate.apply(this, arguments);
    }

    function _scheduleUpdate() {
      _scheduleUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return update();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _scheduleUpdate.apply(this, arguments);
    }

    scheduleUpdate();
  }, [props.children, height, width]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledList, (0, _extends2.default)({
    ref: forwardedRef
  }, props));
};

var List = (0, _react.memo)((0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(StyleableList, (0, _extends2.default)({}, props, {
    forwardedRef: ref
  }));
}));
exports.List = List;