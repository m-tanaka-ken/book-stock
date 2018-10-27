import { api } from './api'

export default {
  async authentication(email: string, password: string) {
    try {
      return await api.get('/users', {
        params: {
          email,
          password
        }
      })
    } catch (error) {
      return error
    }
  },
  async fetchAs(token: string) {
    try {
      return await api.get('/users', {
        params: {
          token
        }
      })
    } catch (error) {
      return error
    }
  }
}
