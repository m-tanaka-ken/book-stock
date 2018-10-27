import { api } from './api'

export interface BookQuery {
  id?: string
  _sort?: string
  _order?: 'desc' | 'asc'
}

export interface Book {
  id: string
  url: string
  name: string
  lastBorrowedUser: string
  borrowedAt: string
  returnedAt: string
  createdAt: string
}

export default {
  async get(query: BookQuery = {}) {
    try {
      return await api.get('/books', { params: query })
    } catch (error) {
      return error
    }
  },
  async borrowBook(payload: Book) {
    try {
      await api.put(`/books/${payload.id}`, payload)
    } catch (error) {
      return error
    }
  },
  async returnBook(payload: Book) {
    try {
      await api.put(`/books/${payload.id}`, payload)
    } catch (error) {
      return error
    }
  }
}
