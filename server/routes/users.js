import express from "express";
import { getUsers, createUser } from "../controllers/event.js";

const router = express.Router();

router.get('/', getEvents);
router.post('/login', login);

export default router;
