const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CarType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CarType.hasMany(models.Car, { foreignKey: 'type_id', onDelete: 'SET NULL'});
    }
  }
  CarType.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'CarType',
      tableName: 'car_type',
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );
  return CarType;
};
