const express = require ('express');
const OpenAI = require ('openai');
const router = express.Router();

const openai = new OpenAI({apikey: process.env.OpenAI_API_KEY});

router.post("/chat", async (req, res) => {
    const { formData } = req.body;

    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: formData }],
    });

    res.json ({ reply: completion.choices[0].message.content });
});

module.exports = router;