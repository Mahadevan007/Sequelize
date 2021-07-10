module.exports = (sequelize, DataTypes) => {
  const Training_Materials = sequelize.define("training_materials", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    file_url: {
      type: DataTypes.STRING,
    },
  });

  return Training_Materials;
};
