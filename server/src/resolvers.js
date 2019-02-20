const users = [
  {
    name: 'sample',
    email: 'sample@sample.sample',
    password: 'password',
    token: 'userToke'
  },
  {
    name: 'taro',
    email: 'taro@taro.taro',
    password: 'password',
    token: 'taroToke'
  }
];

const books = [
  {
    id: 1,
    url:
      'https://images-fe.ssl-images-amazon.com/images/I/51D3wgYhpwL._AC_US160_.jpg',
    name:
      'React入門 React・Reduxの導入からサーバサイドレンダリングによるUXの向上まで (NEXT ONE)',
    created_at: '2018-07-01 00:00:00',
    borrowed_at: '2018-07-03 00:00:00',
    returned_at: '2018-07-05 00:00:00',
    last_borrowed_user: 'sample'
  },
  {
    id: 2,
    url:
      'https://images-fe.ssl-images-amazon.com/images/I/51yVWFs-ZtL._AC_US160_.jpg',
    name: 'React開発 現場の教科書',
    created_at: '2018-07-02 00:00:00',
    borrowed_at: '2018-09-17 0:29:17',
    returned_at: '2018-09-17 0:29:18',
    last_borrowed_user: 'sample'
  },
  {
    id: 3,
    url:
      'https://images-fe.ssl-images-amazon.com/images/I/511CqeD4sXL._AC_US160_.jpg',
    name: '作りながら学ぶ React入門',
    created_at: '2018-07-03 00:00:00',
    borrowed_at: '2018-09-17 0:29:16',
    returned_at: '2018-09-17 0:29:15',
    last_borrowed_user: 'sample'
  },
  {
    id: 4,
    url:
      'https://images-fe.ssl-images-amazon.com/images/I/51HkQMzISkL._AC_US160_.jpg',
    name: 'Reactビギナーズガイド ―コンポーネントベースのフロントエンド開発入門',
    created_at: '2018-07-04 00:00:00',
    borrowed_at: '2018-08-31 23:39:08',
    returned_at: '2018-08-31 23:39:07',
    last_borrowed_user: 'taro'
  },
  {
    id: 5,
    url:
      'https://images-fe.ssl-images-amazon.com/images/I/41lYQRhcvmL._AC_US160_.jpg',
    name: 'Reactではじめるフロントエンド開発入門',
    created_at: '2018-07-05 00:00:00',
    borrowed_at: '2018-10-27 18:15:59',
    returned_at: '2018-10-27 18:15:57',
    last_borrowed_user: 'sample'
  },
  {
    id: 6,
    url:
      'https://images-fe.ssl-images-amazon.com/images/I/51ZMIQPE3hL._AC_US160_.jpg',
    name:
      'いまどきのJSプログラマーのための Node.jsとReactアプリケーション開発テクニック',
    created_at: '2018-07-06 00:00:00',
    borrowed_at: '2018-10-27 18:15:59',
    last_borrowed_user: 'sample',
    returned_at: '2018-11-04 14:51:39'
  }
];

module.exports = {
  Query: {
    books: () => {
      return books;
    },
    book: id => {
      return books.find(book => book.id === id);
    }
  },

  Mutations: {
    login: email => {
      const user = users.find(user => user.email === email);

      return user.token;
    }
  }
};
