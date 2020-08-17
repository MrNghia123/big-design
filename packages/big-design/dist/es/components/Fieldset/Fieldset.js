import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { isValidElement, memo, useMemo } from 'react';
import { warning } from '../../utils';
import { FieldsetDescription } from './Description';
import { FieldsetLegend } from './Legend';
import { StyledFieldset } from './styled';
export var Fieldset = memo(function (_ref) {
  var className = _ref.className,
      legend = _ref.legend,
      description = _ref.description,
      children = _ref.children,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["className", "legend", "description", "children", "style"]);

  var renderedLegend = useMemo(function () {
    if (typeof legend === 'string') {
      return /*#__PURE__*/React.createElement(FieldsetLegend, null, legend);
    }

    if (isValidElement(legend) && legend.type === FieldsetLegend) {
      return legend;
    }

    if (!legend) {
      return null;
    }

    warning('legend must be either a string or a FieldsetLegend component.');
  }, [legend]);
  var renderedDescription = useMemo(function () {
    if (typeof description === 'string') {
      return /*#__PURE__*/React.createElement(FieldsetDescription, null, description);
    }

    if (isValidElement(description) && description.type === FieldsetDescription) {
      return description;
    }

    if (!description) {
      return null;
    }

    warning('description must be either a string or a FieldsetDescription component.');
  }, [description]);
  return /*#__PURE__*/React.createElement(StyledFieldset, props, renderedLegend, renderedDescription, children);
});