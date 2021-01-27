const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const expect = require("chai").expect;

exports.testOnDelete = () => {
    describe("test on delete api call", function () {
        it("deleted user should have firstname = null", async () => {
            await chai.request("http://localhost:3000").delete("/users/2");
            setTimeout(() => {}, 5000);
            const response = await chai
                .request("http://localhost:3000")
                .get("/users/2");
            console.log(response.body.firstname);
            expect(response.body.firstname).to.equal(null);
        });
    });
};
