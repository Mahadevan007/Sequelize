const { users } = require("../models");
const db = require("../models");
const User = db.users;
const Role = db.roles;

exports.createUser = (user) => {
  return User.create({
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

exports.addRole = (userId, roleId) => {
  User.update(
    { fk_roleid: roleId },
    {
      returning: true,
      where: { id: userId },
    }
  )
    .then((updatedUser) => {
      return updatedUser;
    })
    .catch((err) => {
      console.log("unable to update user: ", err);
    });
};

// exports.findTutorialById = (tutorialId) => {
//   return Tutorial.findByPk(tutorialId, { include: ["comments"] })
//     .then((tutorial) => {
//       return tutorial;
//     })
//     .catch((err) => {
//       console.log(">> Error while finding tutorial: ", err);
//     });
// };

// exports.findCommentById = (id) => {
//   return Comment.findByPk(id, { include: ["tutorial"] })
//     .then((comment) => {
//       return comment;
//     })
//     .catch((err) => {
//       console.log(">> Error while finding comment: ", err);
//     });
// };

// exports.findAll = () => {
//   return Tutorial.findAll({
//     include: ["comments"],
//   }).then((tutorials) => {
//     return tutorials;
//   });
// };
