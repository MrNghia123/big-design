import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Options = /*#__PURE__*/function () {
  function Options() {
    _classCallCheck(this, Options);

    _defineProperty(this, "options", {
      htmlFontSize: 16
    });
  }

  _createClass(Options, [{
    key: "getOptions",
    value: function getOptions() {
      return _objectSpread({}, this.options);
    }
  }, {
    key: "setOptions",
    value: function setOptions(newOptions) {
      this.options = _objectSpread({}, this.options, {}, newOptions);
      return this.getOptions();
    }
  }]);

  return Options;
}();

export var themeOptions = new Options();