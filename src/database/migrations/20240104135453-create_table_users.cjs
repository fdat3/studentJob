'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'users',
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
          },
          email: {
            type: Sequelize.STRING,
            unique: true,
          },
          password: Sequelize.STRING,
          full_name: Sequelize.STRING(50),
          major: Sequelize.STRING(50),
          address: Sequelize.STRING(100),
          phone: Sequelize.STRING(20),
          gender: Sequelize.SMALLINT,
          avatar: Sequelize.STRING,
          city: Sequelize.STRING(50),
          languages: Sequelize.ARRAY(Sequelize.STRING(50)),
          skills: Sequelize.ARRAY(Sequelize.STRING(50)),
          bio: Sequelize.TEXT,

          role: {
            type: Sequelize.SMALLINT,
            defaultValue: 0,
          },

          created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
          },
          updated_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
          },
          deleted_at: Sequelize.DATE,
        },
        { transaction },
      );

      await queryInterface.addIndex('users', ['email'], {
        transaction,
        unique: true,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('users', { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
