module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define("trainings", {
    // training_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    trainingscol: {
      type: DataTypes.STRING,
    },
  });

  return Training;
};
