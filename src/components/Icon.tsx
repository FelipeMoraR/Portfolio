import { IIcon } from "../interfaces/Interfaces";




const Icon = ({title, image, color, redirection, typeRedirection}: IIcon) => {

    return(
        <a href = {redirection ? redirection : ''} className = {"tech-project d-block border-radius-100p p-05 " + color} target = {typeRedirection ? typeRedirection : "_blank"} title = {title}>
            <img src={image} alt = {title} className="w-100 h-100"/>
        </a>
    )
}

export default Icon;