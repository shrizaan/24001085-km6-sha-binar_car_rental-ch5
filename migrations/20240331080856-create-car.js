/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('car', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      plate: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      rentPerDay: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      availableAt: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      transmission: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      size: {
        type: Sequelize.ENUM,
        values: ['small', 'medium', 'large'],
        allowNull: false,
      },
      type_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        references: {
          model: {
            tableName: 'car_type',
          },
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      brand_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: {
            tableName: 'car_brand',
          },
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('car');
  },
};
