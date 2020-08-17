"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueId = uniqueId;
var counter = 0; // TODO: Remove once all components use useUniqueId:

function uniqueId(prefix) {
  counter += 1;
  var id = counter;
  return prefix + id;
}