import express from 'express';
import cors from 'cors';
import { getImageURLSustainabilityResponse, getSustainabilityResponse } from './index.js';

const app = express();
const PORT = 3000;

const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(express.static('public'));
app.use(express.json());
app.use(cors(corsOptions));

app.post('/api/prompt', async (req, res) => {
    const { prompt } = req.body;

    const answer = await getSustainabilityResponse(prompt);
    res.json({ answer });
});

app.post('/api/imageURL', async (req, res) => {
    const { imageURL } = req.body;

    const answer = await getImageURLSustainabilityResponse(imageURL);
    res.json({ answer });
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});