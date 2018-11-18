var express = require('express');
const jwtAuthz = require('express-jwt-authz');
const checkJwt = require('../jwt');

var router = express.Router();

const checkScopes = jwtAuthz(['read:list']);

/* GET email list */
router.get('/', checkJwt, checkScopes, function(req, res) {
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    });
  });

module.exports = router;
