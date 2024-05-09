const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CarBrand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CarBrand.hasMany(models.Car, { foreignKey: 'brand_id', onDelete: 'SET NULL'});
    }
  }
  CarBrand.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'CarBrand',
      tableName: 'car_brand',
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );
  return CarBrand;
};
