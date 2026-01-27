import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    addWord,
    editWord,
    getWordByID,
    deleteWord
} from "../../services/words.service";
import Button from "../../ui/Button"
import Input from "../../ui/Input";
export default function WordFormPage() {
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const navigate = useNavigate();

    const [word, setWord] = useState("");
    const [translation, setTranslation] = useState("");

    const handleDelete = async () => {
        const confirmed = window.confirm(
            "Вы уверены, что хотите удалить слово?"
        );

        if (!confirmed) return;

        try {
            await deleteWord(id);
            navigate("/words");
        } catch (err) {
            console.error(err);
            alert("Ошибка при удалении слова");
        }
    };
    useEffect(() => {
        if (isEditMode) {
            getWordByID(id).then((data) => {
                setWord(data.word);
                setTranslation(data.translation);
            });
        }
    }, [id, isEditMode]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditMode) {
            await editWord(id, word, translation);
        } else {
            await addWord(word, translation);
        }

        navigate("/words");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{isEditMode ? "Редактировать слово" : "Добавить слово"}</h1>

            <Input
                label={"Слово"}
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Apple"
                required
            />

            <Input
                label={"Перевод"}
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                placeholder="Яблоко"
                required
            />

            <Button type="submit">
                {isEditMode ? "Сохранить" : "Добавить"}
            </Button>
            {isEditMode && (
            <Button  variant="danger"
                onClick={handleDelete}
            >
                Удалить слово
            </Button>)}
        </form>
    );
}
