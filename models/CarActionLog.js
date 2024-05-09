const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CarActionLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CarActionLog.belongsTo(models.Car, {
        foreignKey: 'car_id',
        onDelete: 'CASCADE',
      });
      CarActionLog.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'SET NULL',
      });
    }
  }
  CarActionLog.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      car_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      action: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['add', 'edit', 'delete'],
      },
    },
    {
      sequelize,
      modelName: 'CarActionLog',
      tableName: 'car_action_log',
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );
  return CarActionLog;
};
