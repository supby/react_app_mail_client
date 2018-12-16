const { google } = require('googleapis')
const client = require('./client')

async function listMessages (authData) {
  var auth = await client(authData)
  // console.log(auth)
  const gmail = google.gmail({
    version: 'v1',
    auth: auth
  })

  return new Promise((resolve, reject) => {
    gmail.users.messages.list({ userId: 'me' }, (err, res) => {
      if (err) {
        reject(err)
        return console.log('The API returned an error: ' + err)
      }
      const messages = res.data.messages
      if (messages.length) {
        resolve(messages)
      } else {
        resolve()
      }
    })
  })
}

module.exports = {
  messages: listMessages
}
