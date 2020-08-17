import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { CloseIcon } from '@bigcommerce/big-design-icons';
import focusTrap from 'focus-trap';
import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useUniqueId } from '../../hooks';
import { typedMemo } from '../../utils';
import { Button } from '../Button';
import { MessagingButton } from '../Button/private';
import { H2 } from '../Typography';
import { StyledModal, StyledModalActions, StyledModalBody, StyledModalClose, StyledModalContent, StyledModalHeader } from './styled';
export var Modal = typedMemo(function (_ref) {
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
  var initialBodyOverflowYRef = useRef('');

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      internalTrap = _useState2[0],
      setInternalTrap = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      modalContainer = _useState4[0],
      setModalContainer = _useState4[1];

  var headerUniqueId = useUniqueId('modal_header');
  var modalRef = createRef();
  var previousFocus = useRef(typeof document !== 'undefined' ? document.activeElement : null);

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

  useEffect(function () {
    var container = document.createElement('div');
    document.body.appendChild(container);
    setModalContainer(container);
  }, []);
  useEffect(function () {
    return internalTrap === null || internalTrap === void 0 ? void 0 : internalTrap.deactivate;
  }, [internalTrap]);
  useEffect(function () {
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
  useEffect(function () {
    if (modalRef.current && !internalTrap) {
      setInternalTrap(focusTrap(modalRef.current, {
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
  var renderedClose = useMemo(function () {
    return variant === 'modal' && /*#__PURE__*/React.createElement(StyledModalClose, null, /*#__PURE__*/React.createElement(MessagingButton, {
      onClick: onClose,
      iconOnly: /*#__PURE__*/React.createElement(CloseIcon, {
        title: "Close"
      })
    }));
  }, [onClose, variant]);
  var renderedHeader = useMemo(function () {
    return header && typeof header === 'string' && /*#__PURE__*/React.createElement(StyledModalHeader, {
      id: headerUniqueId
    }, /*#__PURE__*/React.createElement(H2, {
      margin: "none"
    }, header));
  }, [header, headerUniqueId]);
  var renderedActions = useMemo(function () {
    return Array.isArray(actions) && /*#__PURE__*/React.createElement(StyledModalActions, {
      justifyContent: "flex-end"
    }, actions.map(function (_ref2, index) {
      var text = _ref2.text,
          props = _objectWithoutProperties(_ref2, ["text"]);

      return /*#__PURE__*/React.createElement(Button, _extends({
        key: index
      }, props), text);
    }));
  }, [actions]);
  var renderedContent = /*#__PURE__*/React.createElement(StyledModal, {
    backdrop: backdrop,
    onClick: onClickAway,
    onKeyDown: onKeyDown,
    ref: modalRef,
    variant: variant,
    tabIndex: -1
  }, /*#__PURE__*/React.createElement(StyledModalContent, {
    variant: variant,
    "aria-labelledby": headerUniqueId,
    flexDirection: "column"
  }, renderedClose, renderedHeader, /*#__PURE__*/React.createElement(StyledModalBody, null, children), renderedActions));
  return isOpen && modalContainer ? createPortal(renderedContent, modalContainer) : null;
});