module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });

  return User;
};
