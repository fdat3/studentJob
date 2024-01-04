'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('jobs', { id: Sequelize.INTEGER });
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        'jobs',
        {
          id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
          },
          owner_id: {
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'id',
            },
          },
          title: {
            type: Sequelize.STRING(50),
            allowNull: false,
          },
          description: Sequelize.TEXT,
          work_type: {
            type: Sequelize.SMALLINT,
            defaultValue: 0,
          },
          proposal_count: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
          },
          price: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
          },
          price_type: {
            type: Sequelize.SMALLINT,
            defaultValue: 0,
          },
          required_level: {
            type: Sequelize.SMALLINT,
            defaultValue: 0,
          },
          skills: {
            type: Sequelize.ARRAY(Sequelize.STRING(50)),
            defaultValue: [],
          },
          location: Sequelize.STRING(50),

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

      await queryInterface.addIndex('jobs', ['title'], {
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
     * await queryInterface.dropTable('jobs');
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('jobs', { transaction });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};
