import { IIcon } from "../interfaces/Interfaces";




const Icon = ({title, image, color, redirection, typeRedirection}: IIcon & { color: 'white' | 'purple' }) => {
    const borderAndBackground = {
        white: 'border-solid-white-1 icon-white ',
        purple: 'bg-normal-purple icon-purple'
    }

    

    return(
        <a href = {redirection ? redirection : ''} className = {`tech-project d-block border-radius-100p p-05 ` + borderAndBackground[color] } target = {typeRedirection ? typeRedirection : "_blank"} title = {title}>
            <img src={image} alt = {title} className={`w-100 h-100 p-05` + (color == 'white' ? ' filter-invert-100' : '')}/>
        </a>
    )
}

export default Icon;