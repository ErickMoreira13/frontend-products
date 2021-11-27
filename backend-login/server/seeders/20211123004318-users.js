'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        username: 'John Doe2233',
        password: 123,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   username: 'John Doe2',
      //   password: 123,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   username: 'John Doe3',
      //   password: 123,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});

  }
};
