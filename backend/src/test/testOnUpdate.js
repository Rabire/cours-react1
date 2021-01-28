const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const expect = require("chai").expect;

exports.testOnUpdate = () => {
    describe("put to update user tests", function () {
        it("after update, the user is updated", async () => {
            // Modifier le firstname de l'utilisateur
            await chai
                .request("http://localhost:3000")
                .put("/users/3")
                .send({ firstname: "Grabire" });
            // vérifier que l'utilisateur a changé de nom
            setTimeout(() => {}, 2000);
            const response = await chai
                .request("http://localhost:3000")
                .get("/users/3");
            console.log(response.body.firstname);
            expect(response.body.firstname).to.equal("Grabire");
        });
    });
};
