import "./input.style.scss";


interface IInput {
    label?: string,
    placeholder?: string,
    value: string
    onchange: (e: string) => void
    type: string
}

export const Input = ({label, onchange, value, placeholder, type} : IInput) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input 
            placeholder={placeholder} 
            value={value} 
            onChange={(e) => onchange(e.target.value)}
            type={type}
            />
        </div>
    )
}