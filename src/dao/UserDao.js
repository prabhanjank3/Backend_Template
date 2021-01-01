const uniqueRandom = require("unique-random");
const Contact = require("./models/User");
const random = uniqueRandom(1000, 9999);

const authenticateUser = (credentialObj, resp) => {
  console.log(credentialObj);
  Contact.findOne({ email: credentialObj.email }).then((item) => {
    if (item !== null) {
      if (item.password === credentialObj.password) {
        console.log(item);
        resp.send({
          status: 200,
          msg: "Authentication Successful",
          userData: {
            firstname: item.firstname,
            lastname: item.lastname,
            email: item.email,
            id: item.id
          }
        });
      } else {
        console.log("Incorrect password");
        resp.send({ status: 404, msg: "Incorrect Password" });
      }
    } else {
      resp.send({ status: 404, msg: "No User Found" });
    }
  });
};
const insertUser = (userObj, resp) => {
  console.log(userObj);
  var newUser = new Contact({ ...userObj, id: "USR" + random() });
  newUser
    .save()
    .then((document) => {
      console.log("Inserted new User");
      console.log(document);
      resp.send(document);
    })
    .catch((err) => {
      console.log(err);
      resp.send(err);
    });
};
module.exports.authenticateUser = authenticateUser;
module.exports.insertUser = insertUser;
