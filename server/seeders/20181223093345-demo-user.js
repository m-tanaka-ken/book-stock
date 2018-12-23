'use strict';

const format = require('date-fns/format');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const now = format(new Date(), 'YYYY-MM-DD HH:mm:ss')
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'sample',
          email: 'sample@sample.sample',
          password: 'password',
          token: 'userToken',
          created_at: now,
          updated_at: now
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
