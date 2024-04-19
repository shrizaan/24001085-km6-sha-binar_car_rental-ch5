/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
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
    await queryInterface.bulkInsert('user', [
      {
        id: 'b3b3778d-afbb-4a4d-8c59-419e7d784488',
        name: 'Super Admin',
        email: 'superadmin01@gmail.com',
        password: 'rahasia',
        role: 'superadmin',
      },
      {
        id: 'e7d5eecd-4d7f-4a4e-9d2a-afa1312b098b',
        name: 'Admin 1',
        email: 'regular-admin@gmail.com',
        password: 'rahasia admin',
        role: 'admin',
      },
      {
        id: '5e8c3c8a-3f8b-44a2-93f2-8a65d5e3b8f6',
        name: 'Member',
        email: 'member-aiken@gmail.com',
        password: 'rahasia member',
        role: 'member',
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, {});
  },
};
