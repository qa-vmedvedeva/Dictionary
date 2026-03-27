import "./styles/plate.css";

export default function Plate({
                                  children,
                                  variant = "default",
                                  clickable = false,
                                  onClick,
                                  className = "",
                              }) {
    return (
        <div
            className={`
        plate 
        plate--${variant} 
        ${clickable ? "plate--clickable" : ""} 
        ${className}
      `}
            onClick={onClick}
        >
            {children}
        </div>
    );
}