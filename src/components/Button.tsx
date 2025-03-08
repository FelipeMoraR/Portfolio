import { IButton } from "../interfaces/Interfaces";


const Button = ({text, type, icon, typeBtn, cssClasses, onClick}: IButton) => {
    
    return (
        <button className = {`${cssClasses} ${typeBtn}`} onClick={onClick} type = {type}>
            {
                icon && icon !== '' ? (
                    <span className="material-symbols-outlined">
                        {icon}
                    </span>
                )  : (
                    text
                )
             
            }
        </button>
    )
}

export default Button;