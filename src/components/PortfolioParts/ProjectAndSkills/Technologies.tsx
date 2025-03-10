import { useRef } from "react";
import { ITechnologieBody } from "../../../interfaces/Interfaces";
import useTooltip from "../../../assets/utils/tooltip";


const Technologies = ({id, image, name, onClick}: ITechnologieBody) => {
    const {handlerMouseEnter, handlerMouseLeave} = useTooltip();

    const tooltipTech = useRef<HTMLDivElement>(null); 

    const handleClickTech = async (target: any) => {
        const container = target.closest('.container-tech');

        if(!container) return;

        container.classList.toggle('bright-border');
        
        if(onClick) onClick(id);
    }
    
    return (
        <div id = {`${id}`}  
            className="position-relative remove-efect-tap-highlight-mobile container-tech position-relative cursor-pointer no-select d-flex flex-column justify-content-center align-items-center border-radius-100p  p-05 border-solid-light-purple-dark-1 bg-dark-purple" 
            onClick={(e) => handleClickTech(e.target)} 
            onMouseEnter={() => {
                if(!tooltipTech.current) return;
                handlerMouseEnter(tooltipTech.current);
            }}
            onMouseLeave={() => {
                if(!tooltipTech.current) return;
                handlerMouseLeave(tooltipTech.current);
            }}
        >
            
            <img src={image} alt = {name} className="img-tech w-100 h-100 p-md-2 object-fit-scale-down filter-invert-100"/>
            
            <div className="tooltip-tech opacity-0 position-absolute color-white top-neg-20 font-size-2" ref = {tooltipTech}>
                {name}
            </div>
        </div>
    ) 
}

export default Technologies;