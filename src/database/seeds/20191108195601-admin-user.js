const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'julio melo',
          email: 'juliomelo@gympoint.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      { sequelize }
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
