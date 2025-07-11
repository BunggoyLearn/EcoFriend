import express from 'express';
import cors from 'cors';

const corsOptions = {
    origin: ["http://localhost:5173"]
};


const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/api', (req, res) => {
    res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});