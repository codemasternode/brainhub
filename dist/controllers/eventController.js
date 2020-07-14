"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerNewPerson = registerNewPerson;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _person = _interopRequireDefault(require("../models/person"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function registerNewPerson(_x, _x2) {
  return _registerNewPerson.apply(this, arguments);
}

function _registerNewPerson() {
  _registerNewPerson = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var person, errorResponse, key;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _person["default"].create(_objectSpread({}, req.body));

          case 3:
            person = _context.sent;
            return _context.abrupt("return", res.send({
              person: person
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            errorResponse = {};

            for (key in _context.t0.errors) {
              //ValidationError handler
              if (_context.t0.errors[key].properties) {
                errorResponse[key] = _context.t0.errors[key].properties.message;
              } //CastError handler
              else {
                  errorResponse[key] = _context.t0.errors[key].toString().split(":")[1];
                }
            }

            return _context.abrupt("return", res.status(400).send({
              errorResponse: errorResponse
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _registerNewPerson.apply(this, arguments);
}
//# sourceMappingURL=eventController.js.map