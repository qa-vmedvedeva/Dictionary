const API_URL = "http://localhost:3001/api/words";

export const getWords = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const addWord = async (word, translation) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({word, translation}),
    });
    if (!response.ok) {
        throw new Error("Failed to add word");
    }
    return response.json();
};

export const deleteWord = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};

export const editWord = async  (id, word, translation) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({word, translation}),
    });
    if (!response.ok) {
        throw new Error("Failed to edit word");
    }
    return response.json();
};

export const getWordByID = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error("Failed to get word");
    }
    return response.json();
}