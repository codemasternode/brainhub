"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _default = function _default(URI, done) {
  var dbOptions = {
    poolSize: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  };
  _mongoose["default"].promise = global.promise;

  _mongoose["default"].connect(URI, dbOptions, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!err) {
                _context.next = 2;
                break;
              }

              throw new Error("Error while trying to connect MongoDB ".concat(err));

            case 2:
              console.log("Connected to MongoDB");

              if (process.env.NODE_ENV === "test") {
                done();
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports["default"] = _default;
//# sourceMappingURL=db.js.map