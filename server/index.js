import 'dotenv/config';
import { response } from 'express';
import OpenAI from 'openai'

const client = new OpenAI({
    apiKey: process.env['API_KEY'],
});

export async function getSustainabilityResponse(prompt) {
    try {
        const response = await client.responses.create({
            model: "gpt-4.1",
            input: prompt
        });

        return response.output_text;
    } catch (err) {
        console.error("Failed to fetch response", err);
        return "Failed to fetch response";
    }
}

export async function getImageURLSustainabilityResponse(imageURL) {
    try {
        const imageResponse = await client.responses.create({
            model: "gpt-4.1-mini",
            input: [{
                role: "user",
                content: [
                    { type: "input_text", text: "Declare what is in the image. Use environmentally sustainable practices to suggest a change to the habits in this image." },
                    {
                        type: "input_image",
                        image_url: imageURL,
                    },
                ],
            }],
        });
        return imageResponse.output_text;
    } catch (err) {
        console.error("Failed to fetch response", err);
        return "Failed to fetch response";
    }
}