import { useRef, useState } from "react";
import NavbarElement from "./NavbarElement";
import { INavbar, INavbarElement } from "../../interfaces/Interfaces";
import { translationsNavbar } from "../../assets/translations/translations";
import Button from "../Button";

const NavBar = ({language} : INavbar) => {
    const navbarDiv = useRef<HTMLDivElement>(null);
    const elementsNav = translationsNavbar[language];
    
    const [isHiddenNav, setIsHiddenNav] = useState<boolean>(false);

    const hideNavFunction = (navbar: HTMLDivElement) => {
        
        //This use the most recent value of the useState
        setIsHiddenNav(prev => !prev);

        navbar.classList.toggle('hide-navbar');
        return
    }

    return (
        <>
            <div className = "container-navbar py-6 px-3 m-3 max-w-200 position-fixed right-0 top-50p bg-dark-purple-dark color-white border-radius-6" ref = {navbarDiv}>
                <div className = {`btn-hide-navbar position-absolute   ${ isHiddenNav ? "is-hiden" : ""}`}>
                    <Button
                        type = ""
                        cssClasses="remove-efect-tap-highlight-mobile"
                        typeBtn = "primary-emerald"
                        icon="keyboard_double_arrow_right"
                        onClick={() => {
                            if(!navbarDiv.current) return
                            hideNavFunction(navbarDiv.current)
                        }}
                    />
                </div>

                <div className = {`container-nav-elements d-flex flex-column gap-5 ${isHiddenNav ? 'no-interactive' : ''}`}>
                    {
                        elementsNav.map((element : INavbarElement, index: number) => (
                            <NavbarElement
                                key={index}
                                icon = {element.icon}
                                tooltip = {element.tooltip}
                                sectionToView = {element.sectionToView}
                            />
                        ))
                    }    
                </div>
            </div>
            
        </>
    )
}


export default NavBar;
