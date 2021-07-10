const db = require("../models");
const User = db.users;
const Role = db.roles;
const Batches = db.batches;

exports.createUser = (user) => {
  return Batches.create({
    name: user.name,
    email: user.email,
  })
    .then((user) => {
      console.log(">> Created user: " + JSON.stringify(user, null, 4));
      return user;
    })
    .catch((err) => {
      console.log(">> Error while creating user: ", err);
    });
};
