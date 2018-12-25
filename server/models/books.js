'use strict';
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define('books', {
    url: DataTypes.STRING,
    name: DataTypes.STRING,
    borrowed_at: DataTypes.DATE,
    returned_at: DataTypes.DATE,
    last_borrowed_user: DataTypes.STRING
  }, {
    underscored: true,
  });
  books.associate = function(models) {
    // associations can be defined here
  };
  return books;
};