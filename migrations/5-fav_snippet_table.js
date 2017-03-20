"use strict";

module.exports = {
 up: function(queryInterface, Sequelize) {
   return queryInterface
     .createTable('fav_snippets', {
       user_id: {
         type: Sequelize.INTEGER,
         references: { model: 'users', key: 'id' }
       },
       snippet_id: {
         type: Sequelize.INTEGER,
         references: { model: 'snippets', key: 'id' }
       },
     
       created_at: Sequelize.DATE,
       updated_at: Sequelize.DATE
     });
 },

 down: function(queryInterface, Sequelize) {
   return queryInterface
     .dropTable('fav_snippets');
 }
};