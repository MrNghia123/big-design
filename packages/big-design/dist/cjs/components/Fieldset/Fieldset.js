"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fieldset = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _Description = require("./Description");

var _Legend = require("./Legend");

var _styled = require("./styled");

var Fieldset = (0, _react.memo)(function (_ref) {
  var className = _ref.className,
      legend = _ref.legend,
      description = _ref.description,
      children = _ref.children,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "legend", "description", "children", "style"]);
  var renderedLegend = (0, _react.useMemo)(function () {
    if (typeof legend === 'string') {
      return /*#__PURE__*/_react.default.createElement(_Legend.FieldsetLegend, null, legend);
    }

    if ((0, _react.isValidElement)(legend) && legend.type === _Legend.FieldsetLegend) {
      return legend;
    }

    if (!legend) {
      return null;
    }

    (0, _utils.warning)('legend must be either a string or a FieldsetLegend component.');
  }, [legend]);
  var renderedDescription = (0, _react.useMemo)(function () {
    if (typeof description === 'string') {
      return /*#__PURE__*/_react.default.createElement(_Description.FieldsetDescription, null, description);
    }

    if ((0, _react.isValidElement)(description) && description.type === _Description.FieldsetDescription) {
      return description;
    }

    if (!description) {
      return null;
    }

    (0, _utils.warning)('description must be either a string or a FieldsetDescription component.');
  }, [description]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledFieldset, props, renderedLegend, renderedDescription, children);
});
exports.Fieldset = Fieldset;