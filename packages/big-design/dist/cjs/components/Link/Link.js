"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _styled = require("./styled");

var StyleableLink = (0, _react.memo)(function (props) {
  return /*#__PURE__*/_react.default.createElement(_styled.StyledLink, props);
});
var Link = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      external = _ref.external,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "external"]);
  var isExternal = external && props.target === '_blank';
  return /*#__PURE__*/_react.default.createElement(StyleableLink, (0, _extends2.default)({}, props, {
    isExternal: isExternal,
    forwardedRef: ref
  }), isExternal ? /*#__PURE__*/_react.default.createElement("span", null, children) : children, isExternal && /*#__PURE__*/_react.default.createElement(_bigDesignIcons.OpenInNewIcon, {
    size: "medium"
  }));
});
exports.Link = Link;
Link.displayName = 'Link';