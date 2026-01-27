import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Table from "../../ui/Table";
import IconButton from "../../ui/IconButton";


import { getWords, deleteWord } from "../../services/words.service";
import { faPlusCircle, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function WordsListPage() {
    const [words, setWords] = useState([]);
    const navigate = useNavigate();
    const [sortField, setSortField] = useState("word");
    const [sortDirection, setSortDirection] = useState("asc");


    useEffect(() => {
        loadWords();
    }, []);

    async function loadWords() {
        const data = await getWords();
        setWords(data);
    }

    async function handleDelete(id) {
        if (!window.confirm("Удалить слово?")) return;

        await deleteWord(id);
        loadWords();
    }
    const handleAddClick = () => {
        navigate(`/words/new`);
    };
    const sortedWords = [...words].sort((a, b) => {
        const valueA = a[sortField].toLowerCase();
        const valueB = b[sortField].toLowerCase();

        if (valueA < valueB) return sortDirection === "asc" ? -1 : 1;
        if (valueA > valueB) return sortDirection === "asc" ? 1 : -1;
        return 0;
    });
    function handleSort(field) {
        if (sortField === field) {
            setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    }

    const columns = [
        { key: "word", title: "Слово", sortable: true },
        { key: "translation", title: "Перевод", sortable: true },
        {
            key: "actions",
            title: "",
            render: row => (
                <>
                    <IconButton
                        variant="ghost"
                        size="sm"
                        onClick={e => {
                            e.stopPropagation();
                            navigate(`/words/${row.id}/edit`);
                        }}
                    >
                        <FontAwesomeIcon icon={faPen} />
                    </IconButton>

                    <IconButton
                        variant="danger"
                        onClick={e => {
                            e.stopPropagation();
                            handleDelete(row.id);
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </IconButton>
                </>
            )
        }
    ];

    return (
        <div>
            <h1>Словарь</h1>
            <IconButton
                onClick={handleAddClick}
                size={"lg"}
            >
                <FontAwesomeIcon icon={faPlusCircle}/>
            </IconButton>

            <Table
                columns={columns}
                data={sortedWords}
                onRowClick={row => navigate(`/words/${row.id}/edit`)}
                onSort={handleSort}
                sortField={sortField}
                sortDirection={sortDirection}
            />
        </div>
    );
}