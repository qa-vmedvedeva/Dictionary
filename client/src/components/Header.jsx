import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
export default function Header() {
    return (
        <header className="header">
            <Link to="/words" >
                <Logo className="logo-icon" />
            </Link>
            <Link to="/words/new" className="logo-text">
                Добавить слово
            </Link>
            <Link to="/words/games" className="logo-text">
                Тренироваться
            </Link>
        </header>
    );
}
