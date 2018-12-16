const request = require('request')

class UserProfile {
  constructor (clientId, clientSecret) {
    this._clientId = clientId
    this._clientSecret = clientSecret
  }

  _getToken () {
    return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: 'https://andresuz.eu.auth0.com/oauth/token',
        headers: { 'content-type': 'application/json' },
        body: `{"client_id":"${this._clientId}","client_secret":"${this._clientSecret}","audience":"https://andresuz.eu.auth0.com/api/v2/","grant_type":"client_credentials"}` }

      request(options, function (error, response, body) {
        if (error) reject(error)
        else resolve(JSON.parse(body))
      })
    })
  }

  getUserProfile (userId) {
    return new Promise(async (resolve, reject) => {
      const token = await this._getToken()
      const options = {
        method: 'GET',
        url: 'https://andresuz.eu.auth0.com/api/v2/users/' + userId,
        headers: { authorization: 'Bearer ' + token.access_token } }

      request(options, (err, response, body) => {
        if (err) reject(err)
        else resolve(JSON.parse(body))
      })
    })
  }
}

module.exports = UserProfile
