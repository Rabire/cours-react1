"use strict";
const userModel = require("../src/db-models/user-model");

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
        Add altering commands here.
        Return a promise to correctly handle asynchronicity.
        */

        return queryInterface.createTable("users", userModel);
    },

    down: (queryInterface, Sequelize) => {
        /*
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.
        */

        return queryInterface.dropTable("users");
    },
};
