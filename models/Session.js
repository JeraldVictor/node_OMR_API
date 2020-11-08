module.exports = (sequelize, { DataTypes }) => {
  const Session = sequelize.define(
    "Session",
    {
      uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      session_key: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Session",
      tableName: "session",
      timestamps: true,
      createdAt: false,
      updatedAt: "updateTimestamp",
    }
  );
  return Session;
};
