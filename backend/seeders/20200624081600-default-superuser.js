"use strict";

const hash = require("../src/controllers/hash.js");

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "users",
            [
                {
                    firstname: "Super",
                    lastname: "Administrator",
                    email: "sa@iomentum.com",
                    password: hash.createHash("admin"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    },
};
