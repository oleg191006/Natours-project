const dotenv = require('dotenv');
const mongoose = require('mongoose')
const app = require('./app')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => { console.log('DB connection successfull!') })



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
})