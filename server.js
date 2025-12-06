const express = require('express');
const cors = require('cors');
const { InferenceClient } = require('@huggingface/inference');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Initialize Hugging Face Inference Client
const client = new InferenceClient(process.env.HF_TOKEN);

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Proxy endpoint for Hugging Face API (MUST be before static files)
app.post('/api/generate', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        console.log(`📝 Generating image for prompt: "${prompt}"`);

        // Use InferenceClient with provider auto (uses router.huggingface.co)
        const blob = await client.textToImage({
            provider: "auto",
            model: "black-forest-labs/FLUX.1-schnell",
            inputs: prompt,
        });

        console.log(`✅ Image generated successfully`);

        // Convert blob to buffer
        const buffer = Buffer.from(await blob.arrayBuffer());

        // Send image back to frontend
        res.set('Content-Type', 'image/png');
        res.send(buffer);

    } catch (error) {
        console.error('❌ Server Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Serve static files from current directory (AFTER API routes)
app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`✅ Proxy server running at http://localhost:3000`);
    console.log(`📂 Serving files from: ${__dirname}`);
    console.log(`🔑 Using HF_TOKEN from .env file`);
    console.log(`🤖 Model: black-forest-labs/FLUX.1-schnell`);
    console.log(`🌐 Using InferenceClient with provider: auto`);
});
