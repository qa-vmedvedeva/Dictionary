import express from "express";
import cors from "cors";
import wordsRoutes from "./routes/words.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/words", wordsRoutes);

app.listen(3001, () => {
    console.log("API running on http://localhost:3001");
});