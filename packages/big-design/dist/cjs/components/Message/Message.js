"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _react = _interopRequireWildcard(require("react"));

var _mixins = require("../../mixins");

var _utils = require("../../utils");

var _Box = require("../Box");

var _private = require("../Button/private");

var _Grid = require("../Grid");

var _styled = require("./styled");

var Message = (0, _react.memo)(function (_ref) {
  var className = _ref.className,
      style = _ref.style,
      header = _ref.header,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "style", "header"]);
  var filteredProps = (0, _mixins.excludePaddingProps)(props);
  var icon = (0, _react.useMemo)(function () {
    return props.type && (0, _utils.getMessagingIcon)(props.type);
  }, [props.type]);
  var renderedMessages = (0, _react.useMemo)(function () {
    return props.messages.map(function (_ref2, index) {
      var text = _ref2.text,
          link = _ref2.link;
      return /*#__PURE__*/_react.default.createElement(_Box.Box, {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_styled.StyledMessageItem, null, text), " ", link && /*#__PURE__*/_react.default.createElement(_styled.StyledLink, link, link.text));
    });
  }, [props.messages]);
  var renderedHeader = (0, _react.useMemo)(function () {
    return header && /*#__PURE__*/_react.default.createElement(_styled.StyledHeader, null, header);
  }, [header]);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledMessage, (0, _extends2.default)({}, filteredProps, {
    role: "alert"
  }), /*#__PURE__*/_react.default.createElement(_Grid.GridItem, {
    gridArea: "icon"
  }, icon), /*#__PURE__*/_react.default.createElement(_Grid.GridItem, {
    gridArea: "messages"
  }, renderedHeader, renderedMessages), props.onClose && /*#__PURE__*/_react.default.createElement(_Grid.GridItem, null, /*#__PURE__*/_react.default.createElement(_private.MessagingButton, {
    onClick: props.onClose,
    iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.CloseIcon, {
      size: "large",
      title: "Close."
    })
  })));
});
exports.Message = Message;
Message.defaultProps = {
  messages: [],
  type: 'success'
};