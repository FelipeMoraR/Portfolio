import { useEffect, useRef } from "react";


const NavbarElement = () => {
    const anchorElement = useRef<HTMLAnchorElement>(null); //This is null until DOM end to load;
    

    useEffect(() => {
        const currentAnchor = anchorElement.current; //When the component end to render the anchorElement it'll change to the correct element and not null

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

    return (
        <>
            <a href="#sectionProject" className="reset-anchor position-relative" ref = {anchorElement}>
                <span className = "material-symbols-outlined color-ligth-purple-dark cursor-pointer font-size-6 icon-nav border-radius-100p p-1">
                    person
                </span> 

                <p className="tooltip position-absolute opacity-0 no-interactive"> tooltip </p>
            </a>
            
            
             
        </>
    )
}


export default NavbarElement;