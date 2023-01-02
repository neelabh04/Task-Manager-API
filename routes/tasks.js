const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
    res.send('All items present in tasks')
})

module.exports = router