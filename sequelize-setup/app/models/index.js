const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorial = require("./tutorial.model.js")(sequelize, Sequelize);
// db.tag = require("./tag.model.js")(sequelize, Sequelize);
db.users = require("./users.model")(sequelize, Sequelize);
db.trainings = require("./trainings.model")(sequelize, Sequelize);
db.trainings_to_trainer = require("./trainings_to_trainer.model")(
  sequelize,
  Sequelize
);
db.trainingmaterials = require("./trainingmaterials.model")(
  sequelize,
  Sequelize
);
db.training_schedule = require("./training_schedule.model")(
  sequelize,
  Sequelize
);
db.training_order = require("./training_order.model")(sequelize, Sequelize);
db.students = require("./students.model")(sequelize, Sequelize);
db.streams = require("./streams.model")(sequelize, Sequelize);
db.roles = require("./roles.model")(sequelize, Sequelize);
db.batches = require("./batches.model")(sequelize, Sequelize);
db.batches_has_trainings = require("./batches_has_trainings.model")(
  sequelize,
  Sequelize
);

db.roles.hasOne(db.users, {
  foreignKey: "fk_roleid",
  target: "role_id",
});

db.users.belongsToMany(db.trainings, {
  through: "users_has_trainings",
  as: "usertrainings",
  foreignKey: "user_id",
});

db.trainings.belongsToMany(db.users, {
  through: "users_has_trainings",
  as: "trainingusers",
  foreignKey: "training_id",
});

db.users.hasMany(db.trainings_to_trainer, { as: "trainer_data" });
db.trainings_to_trainer.belongsTo(db.users, {
  foreignKey: "user_id",
  as: "users",
});

db.users.hasMany(db.batches, { as: "batches_data" });
db.batches.belongsTo(db.users, {
  foreignKey: "user_id",
  as: "users",
});

db.batches.hasMany(db.students, { as: "students_data" });
db.students.belongsTo(db.batches, {
  foreignKey: "batch_id",
  as: "batch_data",
});

db.batches.belongsToMany(db.trainings, {
  through: db.batches_has_trainings,
  as: "trainings",
  foreignKey: "idtrainings",
});
db.trainings.belongsToMany(db.batches, {
  through: db.batches_has_trainings,
  as: "batches",
  foreignKey: "idtrainings",
});

db.batches_has_trainings.hasMany(db.trainings_to_trainer, {
  as: "trainings_data",
});
db.trainings_to_trainer.belongsTo(db.batches_has_trainings, {
  foreignKey: "idbatches",
  as: "batches_has_trainings_data",
});

db.training_schedule.hasOne(db.trainings, {
  foreignKey: "fk_training_schedule_id",
  target: "training_schedule_id",
});

db.trainings.hasMany(db.trainingmaterials, { as: "training_materials_data" });
db.trainingmaterials.belongsTo(db.trainings, {
  foreignKey: "trainings_id",
  as: "trainings_data",
});

db.batches_has_trainings.hasOne(db.streams, {
  foreignKey: "fk_streams_id",
  target: "stream_id",
});

db.streams.belongsToMany(db.trainings, {
  through: "streams_has_training", // junction table name
  as: "trainings",
  foreignKey: "streams_id",
});

db.trainings.belongsToMany(db.streams, {
  through: "streams_has_training", // junction table name
  as: "strean",
  foreignKey: "trainings_id",
});

// db.tag.belongsToMany(db.tutorial, {
//   through: "tutorial_tag", // junction table name
//   as: "tutorials",
//   foreignKey: "tag_id",
// });
// db.tutorial.belongsToMany(db.tag, {
//   through: "tutorial_tag", // junction table name
//   as: "tags",
//   foreignKey: "tutorial_id",
// });

module.exports = db;
