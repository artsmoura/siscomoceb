import express from "express";
import { getEvents, createEvent } from "../controllers/event.js";
import Auth from "../middleware/auth.js";

const router = express.Router();

router.get('/events', getEvents);
router.post('/eventcreate', Auth, createEvent);

export default router

