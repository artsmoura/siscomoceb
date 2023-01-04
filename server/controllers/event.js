const express = require('express');
const EventSchema = require("../models/eventSchema.js");

const router = express.Router();

const getEvents = async (req, res) => {
    try {
        const events = await EventSchema.find();
        res.status(200).json(events);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createEvent = async (req, res) => {
    const event = req.body;

    const newEvent = new EventSchema(event);

    try {
        await newEvent.save();
        res.status(201).json(newEvent);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = { getEvents, createEvent };