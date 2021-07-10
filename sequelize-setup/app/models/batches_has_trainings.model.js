module.exports = (sequelize, DataTypes) => {
  const Batch_has_trainings = sequelize.define("batches_has_trainings", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    batch_admin: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  });

  return Batch_has_trainings;
};
