import "./styles/ui.css";
export default function IconButton({
                                       children,
                                       size = "sm",
                                       variant = "ghost",
                                       ...props
                                   }) {
    return (
        <button
            className={`icon-btn icon-btn--${size} icon-btn--${variant}`}
            {...props}
        >
            {children}
        </button>
    );
}