import { IButton } from "../interfaces/Interfaces";


const Button = ({text, type, icon, typeBtn, cssClasses, disabled, onClick}: IButton) => {
    
    return (
        <button className = {`${cssClasses} ${typeBtn} ` + (disabled ? 'btn-disabled' : '')} onClick={onClick} type = {type} disabled = {disabled ? disabled : false} >
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