const db = require("./app/models");
const users_controller = require("./app/controller/users.controller");
const roles_controller = require("./app/controller/roles.controller");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});

const run = async () => {
  const user1 = await users_controller.createUser({
    name: "user1",
    email: "user@gmail.com",
  });

  //   const tut2 = await controller.createTutorial({
  //     title: "Tut#2",
  //     description: "Tut#2 Description",
  //   });

  const role1 = await roles_controller.createRole({
    name: "role1",
    level: "admin",
  });

  await users_controller.addRole(user1.id, role1.id);

  //   const comment2 = await controller.createComment(tut2.id, {
  //     name: "aKoder",
  //     text: "Hi, thank you!",
  //   });

  //   await controller.createComment(tut2.id, {
  //     name: "anotherKoder",
  //     text: "Awesome tut!",
  //   });

  //   const tut1Data = await controller.findTutorialById(tut1.id);
  //   console.log(
  //     ">> Tutorial id=" + tut1Data.id,
  //     JSON.stringify(tut1Data, null, 2)
  //   );

  //   const tut2Data = await controller.findTutorialById(tut2.id);
  //   console.log(
  //     ">> Tutorial id=" + tut2Data.id,
  //     JSON.stringify(tut2Data, null, 2)
  //   );

  //   const comment1Data = await controller.findCommentById(comment1.id);
  //   console.log(
  //     ">> Comment id=" + comment1.id,
  //     JSON.stringify(comment1Data, null, 2)
  //   );

  //   const comment2Data = await controller.findCommentById(comment2.id);
  //   console.log(
  //     ">> Comment id=" + comment2.id,
  //     JSON.stringify(comment2Data, null, 2)
  //   );

  //   const tutorials = await controller.findAll();
  //   console.log(">> All tutorials", JSON.stringify(tutorials, null, 2));
};

// db.sequelize.sync();
