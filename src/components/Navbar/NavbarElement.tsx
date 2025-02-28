import { useEffect, useRef } from "react";
import { INavbarElement } from "../../interfaces/Interfaces";

const NavbarElement = ({icon, sectionToView, tooltip, index} : INavbarElement) => {
    const anchorElement = useRef<HTMLAnchorElement>(null); //This is null until DOM end to load;
    const tooltipElement = useRef<HTMLParagraphElement>(null);
    
    const calculateSpaceTootlip = (tooltipText: string) => {
        const lengthValid = 7;
        const tooltipTextLength = tooltipText.length;
        
        
        const excedentText = tooltipTextLength - lengthValid;

        if(excedentText <= 0) return null;
        
        const newLeftValue = -(64 + (excedentText * 5));
        
        return newLeftValue;
    }

    useEffect(() => {
        const currentAnchor = anchorElement.current; //When the component end to render the anchorElement it'll change to the correct element and not null
        
        if(window.innerWidth <= 992) return;

        if(!currentAnchor) {
            console.error('current anchor not founded');
            return
        };
        
        const handlerMouseEnter = () => {
            const tooltip = currentAnchor.querySelector('.tooltip');

            if(!tooltip) {
                console.error('tooltip no encontrado');
                return
            }

            tooltip.classList.remove('animation-fadeOut-opacity');
            tooltip.classList.add('animation-fadeIn-opacity');
        }

        const handlerMouseLeave = () => {
            const tooltip = currentAnchor.querySelector('.tooltip');
            
            if(!tooltip) {
                console.error('tooltip no encontrado');
                return
            }

            tooltip.classList.remove('animation-fadeIn-opacity');
            tooltip.classList.add('animation-fadeOut-opacity');
        }
        
        currentAnchor.addEventListener('mouseenter', handlerMouseEnter);

        currentAnchor.addEventListener('mouseleave', handlerMouseLeave);

        return() => {
            currentAnchor.removeEventListener('mouseenter', handlerMouseEnter);

             currentAnchor.removeEventListener('mouseleave', handlerMouseLeave);
        }

    }, []);


    useEffect(() => {
        const tooltipDiv = tooltipElement.current;
        const newLeftValue = calculateSpaceTootlip(tooltip);

        if(!tooltipDiv || !newLeftValue) return;

        tooltipDiv.style.left = `${newLeftValue}px`;
        
    }, []);

    return (
        <>
            <a href = {`#${sectionToView}`} className = "reset-anchor position-relative" ref = {anchorElement} key={`${index}`}>
                <span className = "material-symbols-outlined color-ligth-purple-dark cursor-pointer font-size-6 icon-nav border-radius-100p p-1">
                    {icon}
                </span> 

                <p className = "tooltip position-absolute opacity-0 no-interactive" ref = {tooltipElement}> {tooltip} </p>
            </a>
            
            
             
        </>
    )
}


export default NavbarElement;