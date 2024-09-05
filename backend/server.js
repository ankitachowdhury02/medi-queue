import express from 'express'
import cors from 'cors';

// express app
const app = express();

// port
const port = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.json({ limit: '16kb' }));
app.use(express.static('public'));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
})


// listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})