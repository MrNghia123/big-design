import _extends from "@babel/runtime/helpers/esm/extends";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { forwardRef, memo } from 'react';
import { useIsomorphicLayoutEffect, useWindowSize } from '../../hooks';
import { StyledList } from './styled';

var StyleableList = function StyleableList(_ref) {
  var forwardedRef = _ref.forwardedRef,
      update = _ref.update,
      props = _objectWithoutProperties(_ref, ["forwardedRef", "update"]);

  var _useWindowSize = useWindowSize(),
      height = _useWindowSize.height,
      width = _useWindowSize.width;

  useIsomorphicLayoutEffect(function () {
    function scheduleUpdate() {
      return _scheduleUpdate.apply(this, arguments);
    }

    function _scheduleUpdate() {
      _scheduleUpdate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
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
  return /*#__PURE__*/React.createElement(StyledList, _extends({
    ref: forwardedRef
  }, props));
};

export var List = memo(forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyleableList, _extends({}, props, {
    forwardedRef: ref
  }));
}));