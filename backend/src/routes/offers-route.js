module.exports = (app) => {
    const offers = require("../controllers/offers-controller.js");

    // Read all
    app.get("/offers", offers.findAllActive);

    // Read 1 offer
    app.get("/offers/:id", offers.findById);

    // Anonymize one offer
    app.delete("/offers/:id", offers.deleteById);

    // Post to update or add
    app.post("/offers", offers.addOffer);

    // Put to update a offer
    app.put("/offers/:id", offers.updateOffer);
};
