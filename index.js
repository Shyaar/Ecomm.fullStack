const express = require('express')

const app = express()

const router = require('./Backend/routes/usersRouter')
const productRouter = require('./Backend/routes/productRouter')

require('dotenv').config()

const PORT = process.env.PORT || 3001

console.log(PORT)

app.use(express.json())

app.use('/',router)
app.use('/',productRouter)

app.listen(PORT)