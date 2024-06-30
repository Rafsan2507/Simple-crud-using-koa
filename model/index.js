const Sequelize = require("sequelize");

const fs = require("fs");

const path = require("path");

const config = {
  host: "localhost",
  dialect: "postgres",
};

const sequelize = new Sequelize("postgres", "postgres", "rafsan", config);

const db = {};

const files = fs.readdirSync(__dirname);

files.forEach((file) => {
  if (file !== "index.js") {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
