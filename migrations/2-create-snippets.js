"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable('snippets', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER
        },
        title: Sequelize.STRING,
          tag: Sequelize.STRING,
        snippet: Sequelize.STRING(64000),
          javascript: Sequelize.BOOLEAN,
          jquery: Sequelize.BOOLEAN,
          node: Sequelize.BOOLEAN,
          html: Sequelize.BOOLEAN,
          css: Sequelize.BOOLEAN,
          bootstrap: Sequelize.BOOLEAN,
          sass: Sequelize.BOOLEAN,
          sql: Sequelize.BOOLEAN,
          mysql: Sequelize.BOOLEAN,
          mongo: Sequelize.BOOLEAN,
        favorite: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface
      .dropTable('snippets');
  }
};

