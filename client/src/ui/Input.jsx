export default function Input({ label, ...props }) {
    return (
        <div className="input-group">
            {label && <label className="label">{label}</label>}
            <input className="input" {...props} />
        </div>
    );
}