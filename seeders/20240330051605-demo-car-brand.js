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
    queryInterface.bulkInsert('car_brand', [
      {
        id: 'car-brand-f0856500-ee54-11ee-b564-325096b39f47',
        name: 'Toyota',
      },
      {
        id: 'car-brand-cbb3327f-ea73-4f0b-bec0-e480a00dab3f',
        name: 'Honda',
      },
      {
        id: 'car-brand-f053f724-f605-4466-adb9-31d46dd2460b',
        name: 'Daihatsu',
      },
      {
        id: 'car-brand-00d73829-f427-415f-a37f-1b8c45f1a644',
        name: 'Suzuki',
      },
      {
        id: 'car-brand-077292a4-907b-4e3e-a28a-34a73a2bf81e',
        name: 'Mitsubishi',
      },
      {
        id: 'car-brand-e832841b-1577-46f2-9e49-4ea6197bc19d',
        name: 'Hyundai',
      },
      {
        id: 'car-brand-1f71e8da-1abe-46c8-bf16-277eed056298',
        name: 'BMW',
      },
      {
        id: 'car-brand-3b171065-cdc0-449d-b37a-70c04cca963f',
        name: 'Fiat',
      },
      {
        id: 'car-brand-0499116f-8121-44d0-9b9d-b0b8e27c2b19',
        name: 'Tesla',
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
    queryInterface.bulkDelete('car_brand', null, {});
  },
};
