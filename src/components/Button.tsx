import { IButton } from "../interfaces/Interfaces";


const Button = ({text, type, cssClasses,onClick}: IButton) => {
    if (type == "skip-btn") return <button className = {cssClasses} onClick={onClick}><span className="material-symbols-outlined"> close </span></button>

    return (
        <button className = {cssClasses} onClick={onClick}>{text}</button>
    )
}

export default Button;