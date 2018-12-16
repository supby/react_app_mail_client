const UserProfile = require('../auth0/UserProfile')
const credentials = require('./credentials')

const userProfile = new UserProfile(credentials.clientId, credentials.clientSecret)

module.exports = userProfile
