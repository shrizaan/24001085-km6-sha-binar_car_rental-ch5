const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.CarType, { foreignKey: 'type_id' });
      Car.belongsTo(models.CarBrand, { foreignKey: 'brand_id' });
    }
  }
  Car.init(
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      plate: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: {
          msg: 'Plate already used.',
        },
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: {
          msg: 'Car name already used.',
        },
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rentPerDay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      availableAt: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      transmission: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.ENUM,
        values: ['small', 'medium', 'large'],
        allowNull: false,
      },
      type_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'car',
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );
  return Car;
};
