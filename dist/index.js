"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _db = _interopRequireDefault(require("./config/db"));

var _eventRoute = _interopRequireDefault(require("./routes/eventRoute"));

var _path = _interopRequireDefault(require("path"));

require("dotenv/config");

var ENV = process.env.NODE_ENV;
var PORT = process.env.PORT || 5000,
    MONGO_DB_URL = process.env.MONGO_DB_URL || "mongodb://localhost:27017/eventDB"; //dev
//test
//production

if (ENV === "dev" || ENV === "production") {
  (0, _db["default"])(MONGO_DB_URL);
}

var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../client/build')));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _cors["default"])({
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:5000']
}));
app.use("/api/event", (0, _eventRoute["default"])());
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../client/build/index.html'));
});
app.listen(PORT, function () {
  console.log("Application is running on port ".concat(PORT));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map