import { useRef } from "react";
import { IIcon } from "../interfaces/Interfaces";
import useTooltip from "../assets/utils/tooltip";



const Icon = ({title, image, color, redirection, typeRedirection, hasToolTip}: IIcon & { color: 'white' | 'purple' }) => {
    const {handlerMouseEnter, handlerMouseLeave} = useTooltip();
    
    const borderAndBackground = {
        white: 'border-solid-white-1 icon-white ',
        purple: 'bg-normal-purple icon-purple'
    }

    const tooltipTech = useRef<HTMLDivElement>(null); 

    

    if(redirection){
        return(
            <a 
                href = {redirection ? redirection : ''} 
                className = {`tech-project d-block border-radius-100p p-05 position-relative ` + borderAndBackground[color] } 
                target = {typeRedirection ? typeRedirection : "_blank"} 
                title = {title}
                onMouseEnter={ hasToolTip ? () => {
                    if(!tooltipTech.current) return;
                    handlerMouseEnter(tooltipTech.current);
                } : undefined }
                onMouseLeave={hasToolTip ? () => {
                    if(!tooltipTech.current) return;
                    handlerMouseLeave(tooltipTech.current);
                } : undefined}
            >
                <img src={image} alt = {title} className={`w-100 h-100 p-05` + (color == 'white' ? ' filter-invert-100' : '')}/>

                {
                    hasToolTip ? (
                        <div className="tooltip-icon opacity-0 position-absolute color-white font-size-1" ref = {tooltipTech}>
                            {title}
                        </div>
                    ) : null
                }

            </a>
        )
    }

    return(
        <div 
            className = {`tech-project d-block border-radius-100p p-05 position-relative cursor-pointer ` + borderAndBackground[color] }
            onMouseEnter={ hasToolTip ? () => {
                if(!tooltipTech.current) return;
                handlerMouseEnter(tooltipTech.current);
            } : undefined }
            onMouseLeave={hasToolTip ? () => {
                if(!tooltipTech.current) return;
                handlerMouseLeave(tooltipTech.current);
            } : undefined}
        >
            <img src={image} alt = {title} className={`w-100 h-100 p-05` + (color == 'white' ? ' filter-invert-100' : '')}/>

            {
                hasToolTip ? (
                    <div className="tooltip-icon opacity-0 position-absolute color-white top-neg-14 left-50p translateX-neg-50 font-size-1" ref = {tooltipTech}>
                        {title}
                    </div>
                ) : null
            }

        </div>
    )
}

export default Icon;