import { Sequelize, DataTypes } from "sequelize"
import { sequelize } from "../database/database"

import Task from "./Tasks";

const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT
    },
    deliverydate: {
        type: DataTypes.DATE
    }
}, {
    //Para que no tenga problemas con las fechas
    timestamps: false
});

Project.hasMany(Task, { foreignKey: 'projectid', sourceKey: 'id'})
Task.belongsTo(Project, { foreignKey: 'projectid', sourceKey: 'id'})

export default Project;