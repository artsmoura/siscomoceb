const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    name: String,
    description: String,
    creator: String,
    location: String,
    dateEvent: {
        type: Date,
        default: new Date()
    },
    qntSubscribed: {
        type: Number,
        default: 0
    },
    subscribed: {
        type: Array,
        default: []
    },
    createAt: {
        type: Date,
        default: new Date()
    },
    eventActive: {
        type: Boolean,
        default: false
    },
    image: String,
    accommodation: [
        {
            name: String,
            checked: Boolean
        }
    ]
});

const EventSchema = mongoose.model('Event', eventSchema);

module.exports = EventSchema;