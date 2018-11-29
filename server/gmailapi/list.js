const { google } = require('googleapis')
const client = require('./client')

async function listMessages () {
  var auth = await client()
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

async function listLabels () {
  var auth = await client()

  const gmail = google.gmail({ version: 'v1', auth })

  return new Promise((resolve, reject) => {
    gmail.users.labels.list({ userId: 'me' }, (err, res) => {
      if (err) {
        reject(err)
        return console.log('The API returned an error: ' + err)
      }
      const labels = res.data.labels
      if (labels.length) {
        resolve(labels)
      } else {
        resolve()
      }
    })
  })
}

module.exports = {
  messages: listMessages,
  labels: listLabels
}
