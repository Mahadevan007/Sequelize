module.exports = (sequelize, DataTypes) => {
  const Training_Schedule = sequelize.define("trainings_schedule", {
    // training_schedule_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    day: {
      type: DataTypes.INTEGER,
    },
    topic: {
      type: DataTypes.STRING,
    },
  });

  return Training_Schedule;
};
