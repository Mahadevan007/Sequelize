module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("roles", {
    // role_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    name: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.STRING,
    },
  });

  return Role;
};
