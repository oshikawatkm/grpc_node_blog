'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        password: 'password',
        email: 'john@aaaa.com',
        intro: 'Hello World',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Alice',
        password: 'password',
        email: 'alice@aaaa.com',
        intro: 'Hello World',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Bob',
        password: 'password',
        email: 'bob@aaaa.com',
        intro: 'Hello World',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
