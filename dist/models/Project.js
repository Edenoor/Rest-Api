"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = require("../database/database");

var _Tasks = _interopRequireDefault(require("./Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = _database.sequelize.define('projects', {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.DataTypes.TEXT
  },
  priority: {
    type: _sequelize.DataTypes.INTEGER
  },
  description: {
    type: _sequelize.DataTypes.TEXT
  },
  deliverydate: {
    type: _sequelize.DataTypes.DATE
  }
}, {
  //Para que no tenga problemas con las fechas
  timestamps: false
});

Project.hasMany(_Tasks["default"], {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

_Tasks["default"].belongsTo(Project, {
  foreignKey: 'projectid',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;