const db = require("../db-models/mysql-model");
const Sequelize = require("sequelize");
const offerModel = require("../db-models/offer-model");
const checkOfferFields = require("../utils/checkOfferFields.js");
const { sequelize } = require("../db-models/mysql-model");

const Offers = db.sequelize.define("offers", offerModel);

offerIdExists = async (offerId) =>
    !!(await Offers.findOne({
        where: {
            id: offerId,
        },
    }));

exports.findAllActive = (req, res) => {
    Offers.findAll()
        .then((results) => res.send(results).status(200))
        .catch(() => {
            res.sendStatus(500);
        });
};

exports.findById = (req, res) => {
    const urlId = req.params.id;

    Offers.findOne({
        where: {
            id: urlId,
        },
    })
        .then((offerFound) => {
            if (offerFound) {
                res.status(200).send(offerFound);
            } else {
                res.status(400).send("Offer id not found");
            }
        })
        .catch(() => res.sendStatus(500));
};

exports.deleteById = (req, res) => {
    const urlId = req.params.id;

    Offers.findById(urlId).then(async (offerFound) => {
        if (offerFound) {
            try {
                await offerFound.destroy();
                return res.sendStatus(200);
            } catch (error) {
                return res.sendStatus(500);
            }
        } else {
            return res.sendStatus(404);
        }
    });
};

exports.addOffer = async (req, res) => {
    const bodyReceived = req.body;
    const missingRequiredField = checkOfferFields.isPostBodyMissingField(
        bodyReceived
    );
    if (missingRequiredField) {
        return res
            .status(401)
            .send("one or multiple required fields are empty");
    }
    try {
        await Offers.create(bodyReceived);
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
};

exports.updateOffer = (req, res) => {
    const bodyReceived = req.body;
    const urlId = req.params.id;

    offerIdExists(urlId)
        .then(async (doExist) => {
            if (doExist) {
                try {
                    await Offers.update(bodyReceived, {
                        where: { id: urlId },
                    });
                    return res.sendStatus(202);
                } catch (error) {
                    return res.sendStatus(500);
                }
            } else {
                return res.status(400).send("Offer id not found");
            }
        })
        .catch(() => res.sendStatus(500));
};
