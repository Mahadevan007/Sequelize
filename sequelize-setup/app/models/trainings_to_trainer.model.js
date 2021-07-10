module.exports = (sequelize, DataTypes) => {
  const Training_to_trainer = sequelize.define("training_to_trainer", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    batch_admin: {
      type: DataTypes.INTEGER,
    },
    idtrainings: {
      type: DataTypes.STRING,
    },
  });

  return Training_to_trainer;
};
