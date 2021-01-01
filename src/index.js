const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
const db = require("./dao/configurations/configuredb");
const AuthController = require("./controllers/authcontroller");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, resp) => {
  resp.send("Hello");
});
/* User Services */
app.get("/auth", AuthController.authenticateUser);
app.post("/auth", AuthController.insertUser);

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
