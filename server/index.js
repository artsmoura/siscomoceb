const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const eventsRoutes = require('./routes/events.js');
const userRoutes = require('./routes/users.js');
const churchRoutes = require('./routes/church.js');
const { User } = require('./models/userSchema.js');

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/events', eventsRoutes);
app.use('/user', userRoutes);
app.use('/church', churchRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));
    })
    .catch((error) => {
        console.log(error.message);
    });