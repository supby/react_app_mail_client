var express = require('express')
const jwtAuthz = require('express-jwt-authz')
const checkJwt = require('../jwt')
const gmail = require('../gmailapi')

var router = express.Router()

const checkScopes = jwtAuthz(['read:list'])

/* GET email list */
router.get('/', checkJwt, checkScopes, async function (req, res) {
  res.json({
    messages: await gmail.list.messages()
  })
})

module.exports = router
