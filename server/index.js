import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import eventsRoutes from './routes/events.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/events', eventsRoutes);

const CONNECTION_URL = 'mongodb+srv://mouradm:15975300@cluster0.btncpiw.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
    })
    .catch((error) => {
        console.log(error.message);
    });