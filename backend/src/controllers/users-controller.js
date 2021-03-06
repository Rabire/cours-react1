const db = require("../db-models/mysql-model");
const Sequelize = require("sequelize");
const userModel = require("../db-models/user-model");
const hash = require("./hash.js");
const checkFields = require("../utils/checkFields.js");
const { sequelize } = require("../db-models/mysql-model");
const jwt = require("jsonwebtoken");
const { tryGetUserFromToken } = require("../utils/userUtils.js");

const Users = db.sequelize.define("users", userModel);

userIdExists = async (userId) =>
    !!(await Users.findOne({
        where: {
            id: userId,
        },
    }));

exports.findAllActive = async (req, res) => {
    // -- Token verification --
    let user;
    try {
        user = await tryGetUserFromToken(req, res);
    } catch {
        return res.status(401).send("invalid token");
    }

    Users.findAll({
        where: {
            is_deleted: false,
        },
    })
        .then((results) => res.send(results).status(200))
        .catch(() => {
            res.sendStatus(500);
        });
};

exports.findById = async (req, res) => {
    // -- Token verification --
    let user;
    try {
        user = await tryGetUserFromToken(req, res);
    } catch {
        return res.status(401).send("invalid token");
    }

    const urlId = req.params.id;

    Users.findOne({
        where: {
            id: urlId,
        },
    })
        .then((userFound) => {
            if (userFound) {
                res.status(200).send(userFound);
            } else {
                res.status(400).send("User id not found");
            }
        })
        .catch(() => res.sendStatus(500));
};

exports.softDeleteById = async (req, res) => {
    // -- Token verification --
    let user;
    try {
        user = await tryGetUserFromToken(req, res);
    } catch {
        return res.status(401).send("invalid token");
    }
    const urlId = req.params.id;

    userIdExists(urlId)
        .then(async (doExist) => {
            if (doExist) {
                try {
                    await Users.update(
                        {
                            firstname: null,
                            lastname: "soft deleted user",
                            password: "deleted",
                            email: `${urlId}deleted@deleted.com`,
                            is_deleted: true,
                        },
                        { where: { id: urlId } }
                    );
                    res.sendStatus(200);
                } catch (error) {
                    res.sendStatus(500);
                }
            } else {
                res.status(400).send("User id not found");
            }
        })
        .catch(() => res.sendStatus(500));
};

exports.addUser = async (req, res) => {
    // -- Token verification --
    let user;
    try {
        user = await tryGetUserFromToken(req, res);
    } catch {
        return res.status(401).send("invalid token");
    }

    const bodyReceived = req.body;
    const missingRequiredField = checkFields.isPostBodyMissingField(
        bodyReceived
    );
    if (missingRequiredField) {
        res.status(401).send("one or multiple required fields are empty");
    }
    try {
        await Users.create(bodyReceived);
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
};

exports.updateUser = async (req, res) => {
    // -- Token verification --
    let user;
    try {
        user = await tryGetUserFromToken(req, res);
    } catch {
        return res.status(401).send("invalid token");
    }

    const bodyReceived = req.body;
    const urlId = req.params.id;

    userIdExists(urlId)
        .then(async (doExist) => {
            if (doExist) {
                try {
                    await Users.update(bodyReceived, {
                        where: { id: urlId },
                    });
                    res.sendStatus(202);
                } catch (error) {
                    res.sendStatus(500);
                }
            } else {
                res.status(400).send("User id not found");
            }
        })
        .catch(() => res.sendStatus(500));
};

exports.login = async (req, res) => {
    const bodyReceived = req.body;

    Users.findOne({
        where: {
            email: bodyReceived.email,
        },
        attributes: ["id", "password"],
    })
        .then(async (result) => {
            if (result && result.dataValues && result.dataValues.password) {
                const passwordIsCorrect = hash.compareHash(
                    bodyReceived.password,
                    result.dataValues.password
                );
                if (passwordIsCorrect) {
                    const userId = result.dataValues.id;

                    const date = new Date();
                    const expirationDate = date.setDate(date.getDate() + 1);
                    const userToken = jwt.sign(
                        { userId: result.dataValues.id },
                        "crypt"
                    );
                    const updateToken = {
                        token: userToken,
                        tokenExpiration: expirationDate,
                    };
                    await Users.update(updateToken, {
                        where: { id: userId },
                    });
                    const userData = { ...result.dataValues, token: userToken };

                    return res.status(200).send({ userId: userData });
                }
            }
            return res.status(401).send("unknown email or password");
        })
        .catch((err) => {
            console.log(err);
            return res.sendStatus(500);
        });
};
