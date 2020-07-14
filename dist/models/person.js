"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var personSchema = new _mongoose["default"].Schema({
  firstname: {
    type: String,
    required: [true, "firstname is required"],
    maxlength: [60, "firstname is longer than 60 characters"]
  },
  lastname: {
    type: String,
    required: [true, "lastname is required"],
    maxlength: [80, "lastname is longer than 60 characters"]
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: {
      validator: function validator(value) {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(value);
      },
      message: function message(props) {
        return "".concat(props.value, " is not a valid email");
      }
    },
    maxlength: 80
  },
  eventDate: {
    type: Date,
    required: [true, "date of event is required"]
  }
});

var _default = _mongoose["default"].model("person", personSchema);

exports["default"] = _default;
//# sourceMappingURL=person.js.map