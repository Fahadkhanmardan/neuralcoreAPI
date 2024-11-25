import express from 'express'; // Import Express
import { Client } from "@gradio/client";

const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Define the port

const client = await Client.connect("FahadCEO7376/black-forest-labs-FLUX.1-schnell");

// Middleware to parse JSON requests
app.use(express.json());

// Create an API endpoint for predictions
app.post('/predict', async (req, res) => {
    const { param_0 } = req.body; // Get parameter from request body
    try {
        const result = await client.predict("/predict", { param_0 });
        res.json(result.data); // Send the prediction result as a JSON response
    } catch (error) {
        res.status(500).json({ error: 'Prediction failed' }); // Handle errors
    }
});

// Start the server
app.listen(process.env.PORT || 3000)
