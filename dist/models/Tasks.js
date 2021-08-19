"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = require("../database/database");

var Task = _database.sequelize.define('task', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.DataTypes.TEXT
  },
  done: {
    type: _sequelize.DataTypes.BOOLEAN
  },
  projectid: {
    type: _sequelize.DataTypes.INTEGER
  }
}, {
  timestamps: false
});

var _default = Task;
exports["default"] = _default;