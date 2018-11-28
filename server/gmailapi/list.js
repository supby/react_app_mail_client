const { google } = require('googleapis')
const client = require('./client')

async function list () {
  var auth = await client()
  const gmail = google.gmail({
    version: 'v1',
    auth: auth
  })

  const res = await gmail.users.messages.list({ userId: 'me' })
  console.log(res.data)
  return res.data
}

module.exports = list
