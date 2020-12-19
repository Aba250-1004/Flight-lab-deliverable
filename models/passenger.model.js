const mongoose = require('mongoose')

const Passenger = mongoose.model (
    "Passenger",
    new mongoose.Schema({
        firstName:String,
        lastName:Number,
        dob: Date
    })
)

module.exports = Passenger