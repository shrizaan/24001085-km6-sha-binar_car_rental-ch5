/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('car_action_log', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      car_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'car',
          },
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      user_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'user',
          },
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      action: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['add', 'edit', 'delete'],
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
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('car_action_log');
  },
};
