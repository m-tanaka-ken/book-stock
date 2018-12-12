import { api } from './api';

export interface BookQuery {
  id?: string;
  _sort?: string;
  _order?: 'desc' | 'asc';
}

/* eslint camelcase: 0 */
export interface Book {
  id: string;
  url: string;
  name: string;
  last_borrowed_user: string;
  borrowed_at: string;
  returned_at: string;
  created_at: string;
}

export default {
  async get(query: BookQuery = {}) {
    try {
      return await api.get('/books', { params: query });
    } catch (error) {
      return error;
    }
  },
  async borrowBook(payload: Book) {
    try {
      await api.put(`/books/${payload.id}`, payload);
    } catch (error) {
      return error;
    }
  },
  async returnBook(payload: Book) {
    try {
      await api.put(`/books/${payload.id}`, payload);
    } catch (error) {
      return error;
    }
  }
};
