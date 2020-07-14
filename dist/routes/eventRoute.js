"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _eventController = require("../controllers/eventController");

var router = _express["default"].Router();

var _default = function _default() {
  router.post("/register-new-person", _eventController.registerNewPerson);
  return router;
};

exports["default"] = _default;
//# sourceMappingURL=eventRoute.js.map