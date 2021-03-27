'use strict'

let express = require('express')

let router = express.Router()

let rest = require('./rest')

function showMid(req, res, next) {
    console.log('show middle\n\n\n')
    return next()
}

// router.get('/api/getUniqueKeywords', rest.getUniqueKeywords)

// router.post('/api/byFields', rest.byFields)

router.post("/api/echo", rest.echo)
router.post("/api/login", rest.login)



module.exports = router