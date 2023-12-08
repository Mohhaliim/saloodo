const { bcryptPassword } = require('../util/bcrypt')
const fs = require('fs')
const path = require('path');

module.exports = {
    up: async (queryInterface, Sequelize) => {
      try {
        const filePath = path.join(__dirname, 'users.json');

        const rawData = fs.readFileSync(filePath);
        const users = JSON.parse(rawData);

        const hashedUsers = await Promise.all(
          users.map(async (user) => {
            const hashedPassword = bcryptPassword(user.password);
            return { ...user, password: hashedPassword, createdAt: new Date(), updatedAt: new Date() };
          })
        );

        await queryInterface.bulkInsert('Users', hashedUsers, {});
      } catch (error) {
        console.error('Error seeding users:', error);
      }
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
    },
};
