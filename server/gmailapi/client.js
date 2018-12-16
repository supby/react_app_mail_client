const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')
const credentials = require('./credentials')

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json'

function authorize (authData) {
  return new Promise(async function (resolve, reject) {
    const { clientSecret, clientId, redirectUris } = credentials.installed
    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUris[0])

    if (authData) {
      oAuth2Client.setCredentials(authData)
      storeToken(authData)
      resolve(oAuth2Client)
    } else {
      // Check if we have previously stored a token.
      const token = await readToken(oAuth2Client) || await getNewToken(oAuth2Client)

      storeToken(token)

      oAuth2Client.setCredentials(token)
      resolve(token)
    }
  })
}

function readToken () {
  return new Promise((resolve, reject) => {
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) console.log(err)
      resolve(JSON.parse(token))
    })
  })
}

function getNewToken (oAuth2Client) {
  return new Promise((resolve, reject) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    })
    console.log('Authorize this app by visiting this url:', authUrl)
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close()
      oAuth2Client.getToken(code, (err, token) => {
        if (err) reject(err)
        else resolve(token)
      })
    })
  })
}

function storeToken (token) {
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) throw Error('Store token error.')
    console.log('Token stored to', TOKEN_PATH)
  })
}

module.exports = authorize
