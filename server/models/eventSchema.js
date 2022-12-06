import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: [String],
    location: String,
    dataEvent: {
        type: Date,
        default: new Date()
    },
    qntSubscribed: {
        type: Number,
        default: 0
    },
    Subscribed: [String],
    createAt: {
        type: Date,
        default: new Date()
    },
    eventActive: {
        type: Boolean,
        default: false
    }
});

const EventSchema = mongoose.model('Event', eventSchema);

export default EventSchema;