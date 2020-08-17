"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _Typography = require("../Typography");

var _styled = require("./styled");

var Chip = (0, _react.memo)(function (_ref) {
  var children = _ref.children,
      label = _ref.label,
      onDelete = _ref.onDelete,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "label", "onDelete"]);
  var ariaLabel = label ? {
    'aria-label': "Remove ".concat(label)
  } : {};

  var renderDeleteButton = function renderDeleteButton() {
    return onDelete && /*#__PURE__*/_react.default.createElement(_styled.StyledCloseButton, (0, _extends2.default)({}, ariaLabel, {
      iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.CloseIcon, {
        size: "medium",
        title: "Delete"
      }),
      onClick: onDelete,
      type: "button",
      variant: "subtle"
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_styled.StyledChip, (0, _extends2.default)({
    margin: "xxSmall"
  }, rest, {
    backgroundColor: "secondary30",
    borderRadius: "normal",
    paddingLeft: "xSmall",
    paddingRight: "xxSmall"
  }), /*#__PURE__*/_react.default.createElement(_Typography.Text, {
    margin: "none",
    marginRight: "xxSmall"
  }, label), renderDeleteButton());
});
exports.Chip = Chip;
Chip.displayName = 'Chip';