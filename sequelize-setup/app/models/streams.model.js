module.exports = (sequelize, DataTypes) => {
  const Streams = sequelize.define("streams", {
    // stream_id: {
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
  });

  return Streams;
};
