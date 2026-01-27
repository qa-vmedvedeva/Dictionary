import { createBrowserRouter} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import WordListPage from "./pages/WordListPage/WordListPage";
import WordFormPage from "./pages/WordFormPage/WordFormPage";
import GamesPage from "./pages/GamesPage/GamesPage"

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <WordListPage />
            },
            {
                path: "/words",
                element: <WordListPage />
            },
            {
                path: "/words/new",
                element: <WordFormPage />
            },
            {
                path: "/words/:id/edit",
                element: <WordFormPage />
            },
            {
                path: "/words/games",
                element: <GamesPage/>
            }
        ]
    }
]);

export default router;