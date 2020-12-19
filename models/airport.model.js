const mongoose = require('mongoose')

const Airport = mongoose.model (
    "Airport",
    new mongoose.Schema({
        country: String,
        opened: Date,
        terminals: [
            {
                name:String,
                capacity:Number,
                flights: [
                    {
                        type:mongoose.Schema.Types.ObjectId,
                        ref: "Role"
                    }
                ]
            }
        ]
    })
)

module.exports = Airport