import history from '../history'

export default class Auth {
  constructor () {
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  async setSession (authResult) {
    localStorage.setItem('access_token', authResult.tokenObj.access_token)
    localStorage.setItem('id_token', authResult.tokenObj.id_token)
    localStorage.setItem('expires_at', authResult.tokenObj.expires_at)
    // navigate to the root route
    history.replace('/')
  }

  logout () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    // navigate to the root route
    history.replace('/')
  }

  isAuthenticated () {
        // Check whether the current time is past the
        // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
