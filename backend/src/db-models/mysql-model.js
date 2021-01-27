const Sequelize = require("sequelize");

const database = require("../../config/config.json");

const dbDev = database.development;

const sequelize = new Sequelize(
    dbDev.database,
    dbDev.username,
    dbDev.password,
    {
        host: dbDev.host,
        dialect: dbDev.dialect,
    }
);
const db = { Sequelize };

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
