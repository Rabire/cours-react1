"use strict";
const userModel = require("../src/db-models/user-model");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", userModel);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  },
};
