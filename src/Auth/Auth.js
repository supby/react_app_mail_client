
export default class Auth {
  setSession (authResult) {
    localStorage.setItem('access_token', authResult.tokenObj.access_token)
    localStorage.setItem('id_token', authResult.tokenObj.id_token)
    localStorage.setItem('expires_at', authResult.tokenObj.expires_at)
  }

  clearSession () {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
  }

  isAuthenticated () {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
