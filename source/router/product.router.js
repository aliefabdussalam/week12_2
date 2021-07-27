const express = require('express')
const { getlist, getdetail, insert, update, destroy,  } = require('../controller/product')


const router =express.Router()
router
.get('/product', getlist)
.get('/product/:id', getdetail)
.post('/product', insert)
.put('/product/:id', update)
.delete('/product/:id', destroy)

module.exports = router