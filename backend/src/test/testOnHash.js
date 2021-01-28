const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const hash = require("../controllers/hash.js");
const expect = require("chai").expect;

exports.testOnHash = () => {
    describe("test interne à une fonction", function () {
        it("createHash", function () {
            expect(hash.createHash("helloworld").length).to.equal(60);
        });
        it("compareHash", function () {
            expect(
                hash.compareHash(
                    "helloworld",
                    "$2b$10$ceNcw0.YknVFfupxYFRZ/uv4ZmM2.fjl78nQL4Nv50QuYv09n7xn."
                )
            ).to.equal(true);
        });
    });
};
