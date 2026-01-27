import express from "express";
import {addWord,deleteWord,getAllWords, editWord, getWordByID} from "../services/words.service.js"

const router = express.Router();

router.get("/",async (_, res) => {
    const words = await getAllWords();
    res.json(words);
});

router.post("/",async (req, res) => {
    const { word, translation } = req.body;
    if (!word || !translation) {
        return res.status(400).json({ message: "word and translation required" });
    }
    const result = await addWord({word, translation});
    res.status(201).json(result);
});

router.delete("/:id",async (req, res) => {
    await deleteWord(req.params.id);
    res.sendStatus(204);
});

router.put("/:id",async (req, res) => {
    const { word, translation } = req.body;
    const { id } = req.params;
    if (!word || !translation) {
        return res.status(400).json({ message: "word and translation required" });
    }
    const existingWord = await getWordByID(id);
    if (!existingWord) {
        return res.status(404).json({
            message: "Word not found"
        });
    }
    await editWord(req.params.id, {word, translation});

    return res.json({ message: "Word updated successfully" });
});
router.get("/:id",async (req,res) => {
    const word = await getWordByID(req.params.id);
    if(!word) {
        return res.status(404).json({message: "Word not found"});
    }
   res.json(word);
});
export default router;

