const DB = require("./db.config");
const { DataTypes } = require("sequelize");

const Result = DB.define("Result", {
  id: {
    type: DataTypes.INTEGER(100),
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.CHAR(50),
    allowNull: false,
  },
  groupe: {
    type: DataTypes.INTEGER(1),
    defaultValue:0,
  },
  points: {
    type: DataTypes.FLOAT(20),
    defaultValue: 0
  },
});

module.exports = Result;
