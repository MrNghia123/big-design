"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlDescription = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = require("../../Typography");

var _styled = require("./styled");

var FormControlDescription = function FormControlDescription(_ref) {
  var className = _ref.className,
      style = _ref.style,
      link = _ref.link,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style", "link"]);
  var renderedDescriptionLink = (0, _react.useMemo)(function () {
    if (!link) {
      return;
    }

    return link && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ' ', /*#__PURE__*/_react.default.createElement(_styled.StyledLink, link, link.text));
  }, [link]);
  return /*#__PURE__*/_react.default.createElement(_Typography.Small, props, props.children, renderedDescriptionLink);
};

exports.FormControlDescription = FormControlDescription;