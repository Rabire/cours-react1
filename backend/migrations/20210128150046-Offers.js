"use strict";
const offerModel = require("../src/db-models/user-model");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("offers", offerModel);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("offers");
    },
};
