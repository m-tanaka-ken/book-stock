const SQL = require('sequelize');

module.exports.createStore = () => {
  const db = new SQL('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './store.sqlite',
    logging: false
  });

  const users = db.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: SQL.INTEGER
    },
    name: SQL.STRING,
    email: SQL.STRING,
    password: SQL.STRING,
    token: SQL.STRING,
    created_at: {
      allowNull: false,
      type: SQL.DATE
    },
    updated_at: {
      allowNull: false,
      type: SQL.DATE
    }
  });

  const books = db.define('books', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: SQL.INTEGER
    },
    url: SQL.STRING,
    name: SQL.STRING,
    borrowed_at: SQL.DATE,
    returned_at: SQL.DATE,
    last_borrowed_user: SQL.STRING,
    created_at: {
      allowNull: false,
      type: SQL.DATE
    },
    updated_at: {
      allowNull: false,
      type: SQL.DATE
    }
  });

  return { users, books };
};
