
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')


const productRouter = require('./routes/productRoutes');

const url = process.env.DB_URL
mongoose.connect(url)
.then(() => console.log('connected to mongo DB'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use("/product",productRouter)


const port = process.env.PORT || 8000
app.listen(port, () => console.log(`running on port ${port}`))