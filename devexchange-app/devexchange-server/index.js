import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users.js';

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is DevExchange API");
});

app.use('/user', userRoutes)

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://chidvilash2003:Alyc%402003@devexchange.igzcq.mongodb.net/?retryWrites=true&w=majority&appName=DEVEXCHANGE";

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }))
    .catch((err) => {
        console.log(err.message);
    });
