/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    queryInterface.bulkInsert('car_type', [
      {
        id: 'car-type-a5bd09b9-b450-437e-bbcc-eb63fbb84b6b',
        type: 'Hatchback',
      },
      {
        id: 'car-type-e00d317d-7ff0-480c-b9f6-9f628990202d',
        type: 'MPV',
      },
      {
        id: 'car-type-bd073728-9b32-4cfc-b304-a495c2db7c19',
        type: 'SUV',
      },
      {
        id: 'car-type-227f8356-e648-46c0-92e4-1fbd3c2375f2',
        type: 'Sedan',
      },
      {
        id: 'car-type-5453ed06-143b-465a-8880-736751f785e6',
        type: 'Sport',
      },
      {
        id: 'car-type-3f131253-9dd2-4d9c-8573-6e75a80f79de',
        type: 'Offroad',
      },
      {
        id: 'car-type-7bfe6f05-99ad-4bb6-952b-14fec6d8e026',
        type: 'Minivans',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('car_type', null, {});
  },
};
