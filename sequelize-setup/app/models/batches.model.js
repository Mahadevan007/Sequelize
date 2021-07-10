module.exports = (sequelize, DataTypes) => {
  const Batch = sequelize.define("batches", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    batch_admin: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    current_training: {
      type: DataTypes.INTEGER,
    },
  });

  return Batch;
};
