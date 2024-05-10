const mongoose = require('mongoose')

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB connect...')}
    ).catch((err) => {
        // throw new Error(err.message)
        console.log(err)
    })
}

module.exports = db