import { navigate } from '@redwoodjs/router'

let loggedIn = false

export const customAuth = () => ({
  type: 'custom',
  login: async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        loggedIn = true
        resolve()
      }, 1000)
    })

    navigate('/right')
  },
  getUserMetadata: async () => loggedIn,
  getToken: async () => loggedIn
})
