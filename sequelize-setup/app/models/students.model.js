module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("students", {
    // id: {
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
    batches_batch_admin: {
      type: DataTypes.INTEGER,
    },
  });

  return Student;
};
