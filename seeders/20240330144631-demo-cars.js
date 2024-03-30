/* eslint-disable no-unused-vars */
const { randomUUID } = require('crypto');

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
    const carsData = [
      {
        id: 'car-6e2bc663-5197-441a-957b-bc75e4a2da7c',
        plate: 'BG 42DE FE',
        name: 'Toyota Camry',
        description: 'A refined and comfortable sedan with advanced features.',
        image: 'camry.jpg',
        rentPerDay: 900000,
        capacity: 5,
        availableAt: '2024-03-30T08:00:00.000Z',
        available: true,
        transmission: 'Automatic',
        year: 2022,
        size: 'medium',
        type_id: 'car-type-227f8356-e648-46c0-92e4-1fbd3c2375f2',
        brand_id: 'car-brand-f0856500-ee54-11ee-b564-325096b39f47',
      },
      {
        id: 'car-923765c3-2c86-46a8-9f6d-eed9bb86de81',
        plate: 'BG 23FD IF',
        name: 'Toyota Yaris',
        description:
          'A compact and fuel-efficient hatchback perfect for urban driving.',
        image: 'yaris.jpg',
        rentPerDay: 600000,
        capacity: 5,
        availableAt: '2024-03-30T08:00:00.000Z',
        available: true,
        transmission: 'Automatic',
        year: 2021,
        size: 'small',
        type_id: 'car-type-a5bd09b9-b450-437e-bbcc-eb63fbb84b6b',
        brand_id: 'car-brand-f0856500-ee54-11ee-b564-325096b39f47',
      },
      {
        id: 'car-02bbf1fa-1c57-4f86-8b95-fa58af801b81',
        plate: 'ABC123',
        name: 'Toyota Corolla',
        description:
          'A reliable and fuel-efficient sedan suitable for everyday use.',
        image: 'corolla.jpg',
        rentPerDay: 800000,
        capacity: 5,
        availableAt: '2024-03-23T01:04:53.321Z',
        available: true,
        transmission: 'Automatic',
        year: 2020,
        size: 'medium',
        type_id: 'car-type-227f8356-e648-46c0-92e4-1fbd3c2375f2',
        brand_id: 'car-brand-f0856500-ee54-11ee-b564-325096b39f47',
      },
      {
        id: 'car-9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77',
        plate: 'BG QW12 AL',
        name: 'Honda Civic',
        description:
          'A popular choice known for its comfort, reliability, and fuel efficiency.',
        image: 'civic.jpg',
        rentPerDay: 700000,
        capacity: 5,
        availableAt: '2024-03-23T01:04:53.321Z',
        available: true,
        transmission: 'Automatic',
        year: 2019,
        size: 'medium',
        type_id: 'car-type-227f8356-e648-46c0-92e4-1fbd3c2375f2',
        brand_id: 'car-brand-cbb3327f-ea73-4f0b-bec0-e480a00dab3f',
      },
      {
        id: 'car-bf6b5c43-1377-4ae0-8908-310c64266f81',
        plate: 'BG OI21 PP',
        name: 'Honda Mobilio S MT',
        description:
          'The newest MPV from Honda, Mobilio, comes in 1 variant. The highest variant comes with a 1496 cc petrol engine, which can produce up to 116 hp of power and 145 Nm of peak torque. The 7-passenger Mobilio S MT is also equipped with a 5-Speed Manual transmission. The security system is equipped with Central Locking & Power Door Locks.',
        image: 'mobilio-2024.jpg',
        rentPerDay: 450000,
        capacity: 7,
        availableAt: '2024-03-23T01:04:53.321Z',
        available: true,
        transmission: 'Manual',
        year: 2024,
        size: 'medium',
        type_id: 'car-type-e00d317d-7ff0-480c-b9f6-9f628990202d',
        brand_id: 'car-brand-cbb3327f-ea73-4f0b-bec0-e480a00dab3f',
      },
      {
        id: 'car-642e122f-64a8-4e25-9720-fb8fa7a9a6a4',
        plate: 'BG KI31 BE',
        name: 'Mitsubishi Xpander',
        description:
          'Mitsubishi Xpander is available in a choice of petrol engines in Indonesia. The new MPV from Mitsubishi comes in 7 variants. Talking about the engine specifications of the Mitsubishi Xpander, it is powered by two petrol engine options with a capacity of 1499 cc. Xpander is available with Manual and CVT transmissions depending on the variant. and ground clearance of 225 mm.',
        image: 'xpander-2024.jpg',
        rentPerDay: 650000,
        capacity: 7,
        availableAt: '2024-03-23T01:04:53.321Z',
        available: true,
        transmission: 'Manual',
        year: 2024,
        size: 'large',
        type_id: 'car-type-e00d317d-7ff0-480c-b9f6-9f628990202d',
        brand_id: 'car-brand-077292a4-907b-4e3e-a28a-34a73a2bf81e',
      },
      {
        id: 'car-db206cb2-3660-4e8b-9efe-67c10ea354a3',
        plate: 'BG 8U4D AD',
        name: 'Suzuki Ertiga',
        description:
          "Suzuki Ertiga is available with a choice of petrol engines in Indonesia. The new MPV from Suzuki comes in 3 variants. Talking about the engine specifications of the Suzuki Ertiga, it is powered by two petrol engine options with a capacity of 1462 cc. The Ertiga is available with Manual and Automatic transmission depending on the variant. Also, depending on the choice and type of fuel, the Ertiga's fuel consumption reaches 11.8 kmpl for urban areas. Ertiga is a 7 seater MPV with a length of 4395 mm, width 1735 mm, wheelbase 2740 mm. and ground clearance of 180 mm.",
        image: 'suzuki-ertiga-300.jpg',
        rentPerDay: 300000,
        capacity: 7,
        availableAt: '2024-03-23T01:04:53.321Z',
        available: true,
        transmission: 'Manual',
        year: 2021,
        size: 'medium',
        type_id: 'car-type-e00d317d-7ff0-480c-b9f6-9f628990202d',
        brand_id: 'car-brand-00d73829-f427-415f-a37f-1b8c45f1a644',
      },
      {
        id: 'car-5b67f1d7-92d4-41c7-8577-4435740aadf1',
        plate: 'BG QP34 BB',
        name: 'Honda BRV',
        description:
          'Honda BRV 2024 is a 7 Passenger SUV that can be found in Indonesia. This vehicle comes in 5 color choices, 8 variants, 2 engine types, and 2 transmission options: Manual and CVT. The dimensions are 4490 mm L x 1780 mm W x 1685 mm H. A large number of users have rated the BRV, considering the features, mileage, seating comfort and engine performance.',
        image: 'honda-brv-2024.jpg',
        rentPerDay: 400000,
        capacity: 7,
        availableAt: '2024-03-23T01:04:53.321Z',
        available: true,
        transmission: 'Manual',
        year: 2024,
        size: 'large',
        type_id: 'car-type-bd073728-9b32-4cfc-b304-a495c2db7c19',
        brand_id: 'car-brand-cbb3327f-ea73-4f0b-bec0-e480a00dab3f',
      },
      {
        id: 'car-brand-e832841b-1577-46f2-9e49-4ea6197bc19d',
        plate: 'JKL012',
        name: 'BMW X5',
        description:
          'Luxurious SUV with advanced technology and premium features.',
        image: 'x5.jpg',
        rentPerDay: 900000,
        capacity: 5,
        availableAt: '2024-03-23T01:04:53.321Z',
        available: true,
        transmission: 'Automatic',
        year: 2022,
        size: 'medium',
        type_id: 'car-type-bd073728-9b32-4cfc-b304-a495c2db7c19',
        brand_id: 'car-brand-1f71e8da-1abe-46c8-bf16-277eed056298',
      },
    ];

    await queryInterface.bulkInsert('car', carsData, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('car', null, {});
  },
};
