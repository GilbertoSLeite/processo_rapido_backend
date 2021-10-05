const Sequelize = require("sequelize");

const connect = require("../config/connect_database");

const sequelize = connect;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require("./schema/students/table_students")(sequelize, Sequelize);

module.exports = db;
