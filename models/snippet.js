"use strict";

module.exports = function(sequelize, DataTypes) {
  var Snippet = sequelize.define("Snippet", {
      tag: DataTypes.STRING,
      title: DataTypes.STRING,
      snippet: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      javascript: DataTypes.BOOLEAN,
      jquery: DataTypes.BOOLEAN,
      node: DataTypes.BOOLEAN,
      html: DataTypes.BOOLEAN,
      css: DataTypes.BOOLEAN,
      bootstrap: DataTypes.BOOLEAN,
      sass: DataTypes.BOOLEAN,
      sql: DataTypes.BOOLEAN,
      mysql: DataTypes.BOOLEAN,
      mongo: DataTypes.BOOLEAN

  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
      //timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
      //paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    tableName: 'snippets',

    classMethods: {
      associate: function(models) {
        Snippet.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        });
      }
    }
  });

  return Snippet;
};
