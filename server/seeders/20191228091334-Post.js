'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        title: "John's First Post",
        content: "This is Jhon's First Post.",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "John's Second Post",
        content: "This is Jhon's Second Post",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "John's Third Post",
        content: "This is Jhon's Third Post",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Alice's First Post",
        content: "This is Alice's First Post",
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Alice's Second Post",
        content: "This is Alice's Second Post",
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
