const { Sequelize } = require("sequelize");

let sequelize = new Sequelize(
  "volckercapital_questionere_fiverr",
  "fiverr_user",
  "6bYyZmpPPFH[",
  {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
    logging: false,
  }
);

sequelize.sync((err) => {
  console.log("database sync Error", err);
});
module.exports = sequelize;
