
const express = require("express");
const morgan = require("morgan")
const tourRouter = require('./routes/tourRouts')
const userRouter = require('./routes/userRouts')


const app = express();

app.use(morgan('dev'))
app.use(express.json())



app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
})