"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Table: true,
  TableFigure: true
};
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function get() {
    return _Table.Table;
  }
});
Object.defineProperty(exports, "TableFigure", {
  enumerable: true,
  get: function get() {
    return _Table.TableFigure;
  }
});

var _Table = require("./Table");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});