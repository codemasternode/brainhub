import express from "express";
import cors from "cors";
import mongodbConnection from "./config/db";
import eventRoute from './routes/eventRoute';
import path from 'path';


const PORT = process.env.PORT || 5000,
    MONGO_DB_URL = process.env.MONGO_DB_URL || "mongodb://localhost:27017/eventDB"

const app = express();
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'http://localhost:5000'] }));

mongodbConnection(MONGO_DB_URL);

app.use("/api/event", eventRoute())

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const server = app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});


export default server;