module.exports = (sequelize, DataTypes) => {
  const Training_Order = sequelize.define("training_order", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    batch_id: {
      type: DataTypes.INTEGER,
    },
    training_id: {
      type: DataTypes.INTEGER,
    },
  });

  return Training_Order;
};
