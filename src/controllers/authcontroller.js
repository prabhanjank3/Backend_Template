const authdao = require("../dao/UserDao");
const authenticateUser = (req, resp) => {
  console.log(req.query);
  authdao.authenticateUser(req.query, resp);
};
const insertUser = (req, resp) => {
  console.log(req.body);
  console.log("Received request");
  authdao.insertUser(req.body, resp);
};
module.exports.authenticateUser = authenticateUser;
module.exports.insertUser = insertUser;
