"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _bigDesignIcons = require("@bigcommerce/big-design-icons");

var _focusTrap = _interopRequireDefault(require("focus-trap"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _hooks = require("../../hooks");

var _utils = require("../../utils");

var _Button = require("../Button");

var _private = require("../Button/private");

var _Typography = require("../Typography");

var _styled = require("./styled");

var Modal = (0, _utils.typedMemo)(function (_ref) {
  var actions = _ref.actions,
      _ref$backdrop = _ref.backdrop,
      backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop,
      children = _ref.children,
      _ref$closeOnClickOuts = _ref.closeOnClickOutside,
      closeOnClickOutside = _ref$closeOnClickOuts === void 0 ? false : _ref$closeOnClickOuts,
      _ref$closeOnEscKey = _ref.closeOnEscKey,
      closeOnEscKey = _ref$closeOnEscKey === void 0 ? true : _ref$closeOnEscKey,
      header = _ref.header,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {
    return null;
  } : _ref$onClose,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'modal' : _ref$variant;
  var initialBodyOverflowYRef = (0, _react.useRef)('');

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      internalTrap = _useState2[0],
      setInternalTrap = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      modalContainer = _useState4[0],
      setModalContainer = _useState4[1];

  var headerUniqueId = (0, _hooks.useUniqueId)('modal_header');
  var modalRef = (0, _react.createRef)();
  var previousFocus = (0, _react.useRef)(typeof document !== 'undefined' ? document.activeElement : null);

  var onClickAway = function onClickAway(event) {
    if (closeOnClickOutside && modalRef.current === event.target) {
      onClose();
    }
  };

  var onKeyDown = function onKeyDown(event) {
    if (closeOnEscKey && event.key === 'Escape') {
      onClose();
    }
  };

  (0, _react.useEffect)(function () {
    var container = document.createElement('div');
    document.body.appendChild(container);
    setModalContainer(container);
  }, []);
  (0, _react.useEffect)(function () {
    return internalTrap === null || internalTrap === void 0 ? void 0 : internalTrap.deactivate;
  }, [internalTrap]);
  (0, _react.useEffect)(function () {
    var prevFocus = previousFocus.current;
    return function () {
      if (modalContainer) {
        document.body.removeChild(modalContainer);
      }

      document.body.style.overflowY = initialBodyOverflowYRef.current;

      if (prevFocus && typeof prevFocus.focus === 'function') {
        prevFocus.focus();
      }
    };
  }, [initialBodyOverflowYRef, modalContainer, previousFocus]);
  (0, _react.useEffect)(function () {
    if (modalRef.current && !internalTrap) {
      setInternalTrap((0, _focusTrap.default)(modalRef.current, {
        fallbackFocus: modalRef.current
      }));
    }

    if (isOpen) {
      initialBodyOverflowYRef.current = document.body.style.overflowY || '';
      document.body.style.overflowY = 'hidden';
      internalTrap === null || internalTrap === void 0 ? void 0 : internalTrap.activate();
    } else {
      initialBodyOverflowYRef.current = '';
      document.body.style.overflowY = initialBodyOverflowYRef.current;
      internalTrap === null || internalTrap === void 0 ? void 0 : internalTrap.deactivate();
      setInternalTrap(null);
    }
  }, [initialBodyOverflowYRef, internalTrap, isOpen, modalRef]);
  var renderedClose = (0, _react.useMemo)(function () {
    return variant === 'modal' && /*#__PURE__*/_react.default.createElement(_styled.StyledModalClose, null, /*#__PURE__*/_react.default.createElement(_private.MessagingButton, {
      onClick: onClose,
      iconOnly: /*#__PURE__*/_react.default.createElement(_bigDesignIcons.CloseIcon, {
        title: "Close"
      })
    }));
  }, [onClose, variant]);
  var renderedHeader = (0, _react.useMemo)(function () {
    return header && typeof header === 'string' && /*#__PURE__*/_react.default.createElement(_styled.StyledModalHeader, {
      id: headerUniqueId
    }, /*#__PURE__*/_react.default.createElement(_Typography.H2, {
      margin: "none"
    }, header));
  }, [header, headerUniqueId]);
  var renderedActions = (0, _react.useMemo)(function () {
    return Array.isArray(actions) && /*#__PURE__*/_react.default.createElement(_styled.StyledModalActions, {
      justifyContent: "flex-end"
    }, actions.map(function (_ref2, index) {
      var text = _ref2.text,
          props = (0, _objectWithoutProperties2.default)(_ref2, ["text"]);
      return /*#__PURE__*/_react.default.createElement(_Button.Button, (0, _extends2.default)({
        key: index
      }, props), text);
    }));
  }, [actions]);

  var renderedContent = /*#__PURE__*/_react.default.createElement(_styled.StyledModal, {
    backdrop: backdrop,
    onClick: onClickAway,
    onKeyDown: onKeyDown,
    ref: modalRef,
    variant: variant,
    tabIndex: -1
  }, /*#__PURE__*/_react.default.createElement(_styled.StyledModalContent, {
    variant: variant,
    "aria-labelledby": headerUniqueId,
    flexDirection: "column"
  }, renderedClose, renderedHeader, /*#__PURE__*/_react.default.createElement(_styled.StyledModalBody, null, children), renderedActions));

  return isOpen && modalContainer ? (0, _reactDom.createPortal)(renderedContent, modalContainer) : null;
});
exports.Modal = Modal;