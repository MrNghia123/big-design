"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Checkbox: true
};
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function get() {
    return _Checkbox.Checkbox;
  }
});

var _Checkbox = require("./Checkbox");

var _Label = require("./Label");

Object.keys(_Label).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Label[key];
    }
  });
});