import EventSchema from "../models/eventSchema.js";

export const getEvents = async (res, req) => {
    try {
        const events = await EventSchema.find();
        res.status(200).json(events);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createEvent = async (req, res) => {
    const event = req.body;

    const newEvent = new EventSchema(event);

    try {
        await newEvent.save();
        res.status(201).json(newEvent);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};