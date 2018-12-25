'use strict';

const format = require('date-fns/format');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    return queryInterface.bulkInsert(
      'books',
      [
        {
          url:
            'https://images-fe.ssl-images-amazon.com/images/I/51D3wgYhpwL._AC_US160_.jpg',
          name:
            'React入門 React・Reduxの導入からサーバサイドレンダリングによるUXの向上まで (NEXT ONE)',
          created_at: now,
          updated_at: now
        },
        {
          url:
            'https://images-fe.ssl-images-amazon.com/images/I/51yVWFs-ZtL._AC_US160_.jpg',
          name: 'React開発 現場の教科書',
          created_at: now,
          updated_at: now
        },
        {
          url:
            'https://images-fe.ssl-images-amazon.com/images/I/511CqeD4sXL._AC_US160_.jpg',
          name: '作りながら学ぶ React入門',
          created_at: now,
          updated_at: now
        },
        {
          url:
            'https://images-fe.ssl-images-amazon.com/images/I/51HkQMzISkL._AC_US160_.jpg',
          name:
            'Reactビギナーズガイド ―コンポーネントベースのフロントエンド開発入門',
          created_at: now,
          updated_at: now
        },
        {
          url:
            'https://images-fe.ssl-images-amazon.com/images/I/41lYQRhcvmL._AC_US160_.jpg',
          name: 'Reactではじめるフロントエンド開発入門',
          created_at: now,
          updated_at: now
        },
        {
          url:
            'https://images-fe.ssl-images-amazon.com/images/I/51ZMIQPE3hL._AC_US160_.jpg',
          name:
            'いまどきのJSプログラマーのための Node.jsとReactアプリケーション開発テクニック',
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
