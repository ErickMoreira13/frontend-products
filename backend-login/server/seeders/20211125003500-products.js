'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [{
        name: 'Notebook 01',
        price: 3.200,
        discPrice: 10,
        qttInventory: 22,
        cateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Notebook 02',
        price: 5.200,
        discPrice: 10,
        qttInventory: 13,
        cateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('products', null, {});
     
  }
};
