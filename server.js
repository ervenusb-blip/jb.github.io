import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/generate-video", (req, res) => {
    const { prompt } = req.body;
    console.log("Prompt received:", prompt);

    // Sample logic: Return a sample video URL for any prompt
    const sampleVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

    res.json({ videoUrl: sampleVideoUrl });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});