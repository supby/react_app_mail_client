var express = require('express')
const jwtAuthz = require('express-jwt-authz')
const checkJwt = require('../jwt')
const gmail = require('../gmailapi')
const userProfile = require('../auth0')

var router = express.Router()
const checkScopes = jwtAuthz(['read:list'])

/* GET email list */
router.get('/:userId', checkJwt, checkScopes, async function (req, res) {
  const profile = await userProfile.getUserProfile(req.params.userId)
  res.json({
    messages: await gmail.list.messages(profile.identities[0].access_token)
  })
})

module.exports = router
