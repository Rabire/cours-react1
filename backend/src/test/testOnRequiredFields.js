const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const checkField = require("../utils/checkFields.js");
const expect = require("chai").expect;

const UserModel = {
    firstname: "Super",
    lastname: "Administrator",
    email: "sad@iomentum.com",
    password: "admin",
};
const UserModel2 = {
    firstname: "Super",
    lastname: "Administrator",
    password: "admin",
};
const UserModel3 = {
    firstname: "Super",
    lastname: "Administrator",
};
const UserModel4 = {
    firstname: "Super",
    lastname: "Administrator",
    email: "sad@iomentum.com",
    password: "",
};

exports.testOnRequiredFields = () => {
    describe("isPostBodyMissingField", function () {
        it("All fields", function () {
            expect(checkField.isPostBodyMissingField(UserModel)).to.equal(
                false
            );
        });
        it("Missing email", function () {
            expect(checkField.isPostBodyMissingField(UserModel2)).to.equal(
                true
            );
        });
        it("missing pwd and email", function () {
            expect(checkField.isPostBodyMissingField(UserModel3)).to.equal(
                true
            );
        });
        it("password is empty", function () {
            expect(checkField.isPostBodyMissingField(UserModel4)).to.equal(
                true
            );
        });
    });
};
