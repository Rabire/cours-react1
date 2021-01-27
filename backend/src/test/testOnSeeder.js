const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const expect = require("chai").expect;
const assert = require("chai").assert;

const expectedFirstUser = {
    id: 1,
    firstname: "Super",
    lastname: "Administrator",
    email: "sa@iomentum.com",
    password: "$2b$10$f0oQKmVIPY1DvAgq7yhQw.7N70B4gOshmx9y56soEwlUY1aaJ4B8S",
    is_deleted: 0,
    createdAt: "2020-07-08T13:01:56.000Z",
    updatedAt: "2020-07-08T13:01:56.000Z",
};

exports.testOnSeeder = () => {
    describe("test interne à une fonction", function () {
        it("db response = expectedFirstUser", (done) => {
            chai.request("http://localhost:3000")
                .get("/users")
                .end(function (err, res) {
                    expect(res.body).to.deep.include(expectedFirstUser);
                    done();
                });
        });

        it("db response by id = expectedFirstUser", (done) => {
            chai.request("http://localhost:3000")
                .get("/users/1")
                .end(function (err, res) {
                    expect(res.body).to.deep.equal(expectedFirstUser);
                    done();
                });
        });
        it("db response return an object", (done) => {
            chai.request("http://localhost:3000")
                .get("/users")
                .end(function (err, res) {
                    assert.isObject(res.body[0]);
                    done();
                });
        });
    });
};
