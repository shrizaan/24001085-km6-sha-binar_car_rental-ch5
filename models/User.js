const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
      User.hasMany(models.CarActionLog, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: {
          msg: 'Email already used.',
        },
        validate: {
          isEmail: {
            msg: 'Email is invalid',
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      role: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['superadmin', 'admin', 'member'],
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'user',
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  );
  return User;
};
