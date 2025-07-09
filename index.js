import OpenAI from 'openai'
const client = new OpenAI();
import 'dotenv/config';

const response = await client.response.create({
    model: "gpt-4.1",
    input: "Write a one sentence bedtime story about a unicorn"
});

console.log(response.output_text);