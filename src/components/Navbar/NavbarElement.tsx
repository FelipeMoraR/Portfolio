import { useEffect, useRef } from "react";
import { INavbarElement } from "../../interfaces/Interfaces";

const NavbarElement = ({icon, sectionToView, tooltip} : INavbarElement) => {
    const tooltipElement = useRef<HTMLParagraphElement>(null);
    
    const calculateSpaceTootlip = (tooltipText: string) => {
        const lengthValid = 7;
        const tooltipTextLength = tooltipText.length;
        
        
        const excedentText = tooltipTextLength - lengthValid;

        if(excedentText <= 0) return null;
        
        const newLeftValue = -(64 + (excedentText * 5));
        
        return newLeftValue;
    }

    const handlerMouseEnter = (tooltip: HTMLParagraphElement) => {
        tooltip.classList.remove('animation-fadeOut-opacity');
        tooltip.classList.add('animation-fadeIn-opacity');
    }

    const handlerMouseLeave = (tooltip: HTMLParagraphElement) => {
        tooltip.classList.remove('animation-fadeIn-opacity');
        tooltip.classList.add('animation-fadeOut-opacity');
    }


    useEffect(() => {
        const tooltipDiv = tooltipElement.current;
        const newLeftValue = calculateSpaceTootlip(tooltip);

        if(!tooltipDiv || !newLeftValue) return;

        tooltipDiv.style.left = `${newLeftValue}px`;
        
    }, []);

    return (
        <>
            <a href = {`#${sectionToView}`} className = "reset-anchor position-relative" 
                onMouseEnter={() => {
                    if(!tooltipElement.current) return
                    handlerMouseEnter(tooltipElement.current)
                }} 
                onMouseLeave={() => {
                    if(!tooltipElement.current) return
                    handlerMouseLeave(tooltipElement.current)
                }} 
            >
                <span className = "material-symbols-outlined color-ligth-purple-dark cursor-pointer font-size-md-6 icon-nav border-radius-100p p-2">
                    {icon}
                </span> 

                <p className = "tooltip position-absolute opacity-0 no-interactive" ref = {tooltipElement}> {tooltip} </p>
            </a>
            
            
             
        </>
    )
}


export default NavbarElement;