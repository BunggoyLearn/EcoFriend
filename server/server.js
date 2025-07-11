import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(express.static('public'));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/api', (req, res) => {
    res.json({ fruits: ["apple", "orange", "banana"] });
});

app.post('/gpt', async (req, res) => {
    let prompt = req.body.prompt;
    let response = await textPrompt(prompt);
    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});