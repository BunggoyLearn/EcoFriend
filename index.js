import OpenAI from 'openai'
const client = new OpenAI({
    apiKey: process.env['API_KEY'],
});
import 'dotenv/config';

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a one sentence bedtime story about a unicorn"
});

const imageResponse = await client.responses.create({
    model: "gpt-4.1-mini",
    input: [{
        role: "user",
        content: [
            { type: "input_text", text: "Declare what is in the image.Use environmentally sustainable practices to suggest a change to the habits in this image." },
            {
                type: "input_image",
                image_url: "https://sepurahome.com/cdn/shop/articles/run-water-with-garbage-disposal_1024x1024.png?v=1684173981",
            },
        ],
    }],
});

//console.log(imageResponse.output_text);