module.exports = (sequelize, { DataTypes }) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "User Already Exist. Please Login",
          fields: [sequelize.fn("lower", sequelize.col("email"))],
        },
        validate: {
          isEmail: {
            msg: "Email address must be valid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
      timestamps: true,
      createdAt: false,
      updatedAt: "updateTimestamp",
    }
  );
  return User;
};
