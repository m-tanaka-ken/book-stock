import { ActionTree, MutationTree } from 'vuex';
import apiBook from '../../../apis/book';
import * as types from './types';

export interface BookState {
  id: string;
  url: string;
  name: string;
  createdAt: string;
  borrowedAt: string;
  returnedAt: string;
  lastBorrowedUser: string;
}

const state: { newBooks: [BookState]; recommendBooks: [BookState] } = {
  newBooks: [
    {
      id: '0',
      url: '',
      name: '',
      createdAt: '',
      borrowedAt: '',
      returnedAt: '',
      lastBorrowedUser: ''
    }
  ],
  recommendBooks: [
    {
      id: '0',
      url: '',
      name: '',
      createdAt: '',
      borrowedAt: '',
      returnedAt: '',
      lastBorrowedUser: ''
    }
  ]
};

const actions: ActionTree<
  { newBooks: [BookState]; recommendBooks: [BookState] },
  { newBooks: [BookState]; recommendBooks: [BookState] }
> = {
  async init({ commit }) {
    const formatPayload = (book: any) => {
      return {
        id: book.id,
        url: book.url,
        name: book.name,
        createdAt: book.created_at,
        borrowedAt: book.borrowed_at,
        returnedAt: book.returned_at,
        lastBorrowedUser: book.last_borrowed_user
      };
    };

    const { data: newBooks } = await apiBook.get({
      _sort: 'created_at',
      _order: 'desc'
    });

    const { data: recommendBooks } = await apiBook.get();
    const payload = {
      recommendBooks: recommendBooks.map(formatPayload),
      newBooks: newBooks.map(formatPayload)
    };
    commit(types.init, payload);
  }
};

const mutations: MutationTree<{
  newBooks: [BookState];
  recommendBooks: [BookState];
}> = {
  init(
    state: { newBooks: [BookState]; recommendBooks: [BookState] },
    payload: { newBooks: [BookState]; recommendBooks: [BookState] }
  ) {
    state.newBooks = payload.newBooks;
    state.recommendBooks = payload.recommendBooks;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
