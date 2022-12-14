import express from "express";
import { login } from "../controllers/user.js";

const router = express.Router();

/* router.get('/', getEvents); */
router.post('/login', login);

export default router;
