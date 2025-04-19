const express = require("express");
const morgan = require("morgan")
const tourRouter = require('./routes/tourRouts')
const userRouter = require('./routes/userRouts')


const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(`${__dirname}/public`))


app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)


module.exports = app;