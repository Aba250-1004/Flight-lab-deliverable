const mongoose = require('mongoose')

const Terminal = mongoose.model (
    "Terminal",
    new mongoose.Schema({
        name:String,
        capacity:Number,
        flights: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
)

module.exports = Terminal