import { defineStore } from 'pinia'

export default defineStore('app', {
  state: () => {
    return {
      message: null
    }
  },
  actions: {
    async setMessage (msg) {
      this.message = msg
    }
  }
})