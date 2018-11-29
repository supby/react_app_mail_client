var express = require('express')
const jwtAuthz = require('express-jwt-authz')
const checkJwt = require('../jwt')
const gmail = require('../gmailapi')

var router = express.Router()

const checkScopes = jwtAuthz(['read:list'])

/* GET email list */
router.get('/', checkJwt, checkScopes, function (req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  })
})

router.get('/temp/labels', async function (req, res) {
  res.json({
    messages: await gmail.list.labels()
  })
})

router.get('/temp/messages', async function (req, res) {
  res.json({
    messages: await gmail.list.messages()
  })
})

module.exports = router
