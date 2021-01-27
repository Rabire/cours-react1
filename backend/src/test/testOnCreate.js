const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const expect = require("chai").expect;

exports.testOnCreate = () => {
    describe("post to create user tests", function () {
        it("after creation, the user exists", async () => {
            //création de l'utilisateur Jean-Louis
            await chai.request("http://localhost:3000").post("/users").send({
                firstname: "Jean-Louis",
                lastname: "Dupont",
                email: "jld@test.com",
                password: "maison",
            });
            // Vérification que Jean Louis existe
            const response = await chai
                .request("http://localhost:3000")
                .get("/users/4");
            console.log(response.body.firstname);
            expect(response.body.firstname).to.equal("Jean-Louis");
        });
    });
};
