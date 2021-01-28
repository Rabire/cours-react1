const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db-models/mysql-model.js");
db.sequelize.sync();

app.use(bodyParser.json());
app.use(cors("http://localhost:" + port));

// Require the questions routes
require("./routes/users-route.js")(app);

app.listen(port, () =>
    console.log(`Example listening at http://localhost:${port}`)
);
