import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json({limit: "30mb", extended: true}))

app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is DevExchange API")
})

const PORT = process.env.PORT || 5000

const connection_url = "mongodb+srv://swaroop134:swaroop@Vjs1304@dev-exchange.oumzm.mongodb.net/?retryWrites=true&w=majority&appName=dev-exchange"

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedToplogy: true})
    .then(() => app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    }))
    .catch((err) => {
        console.log(err.message);
    })