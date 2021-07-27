const express = require("express")
const parser = require('body-parser')
const db = require('./source/config/db')
const bodyParser = require("body-parser")
const router_user = require('./source/router/users.router')
const router_product = require('./source/router/product.router')

const app = express()
app.use(bodyParser.json())
app.use(router_user)
app.use(router_product)
app.listen(8800,() =>{
    console.log('connect to 8800')
})