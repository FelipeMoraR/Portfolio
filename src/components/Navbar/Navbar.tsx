import { useEffect, useRef, useState } from "react";
import NavbarElement from "./NavbarElement";

const NavBar = () => {
    const hideNavDiv = useRef<HTMLDivElement>(null); 
    const navbarDiv = useRef<HTMLDivElement>(null);
    const [isHiddenNav, setIsHiddenNav] = useState<boolean>(false);

    const hideNavFunction = (navbar: HTMLDivElement) => {
        
        //This use the most recent value of the useState
        setIsHiddenNav(prev => !prev);

        navbar.classList.toggle('hide-navbar');
        return
    }
    

    useEffect(() => { 
        const navBarCurrent = navbarDiv.current;
        const hideNavDivCurrent = hideNavDiv.current;

        if(!navBarCurrent || !hideNavDivCurrent) return;
        
        const handlerClickHideNav = () => {
            hideNavFunction(navBarCurrent)
        }

        hideNavDivCurrent.addEventListener('click', handlerClickHideNav);
        
        return() => {
            if(hideNavDivCurrent) hideNavDivCurrent.removeEventListener('click', handlerClickHideNav);
        }

    }, []);

    return (
        <>
            <div className = "container-navbar py-6 px-3 m-3 max-w-200 position-fixed right-0 top-50p bg-dark-purple-dark color-white border-radius-6" ref = {navbarDiv}>
                <div className = {`btn-hide-navbar no-select bg-emerald position-absolute cursor-pointer d-flex align-items-center justify-content-center border-radius-4 ${ isHiddenNav ? "is-hiden" : ""}`} ref={hideNavDiv}>
                    <span className = "material-symbols-outlined ">
                        keyboard_double_arrow_right
                    </span>  
                </div>

                <div className = {`container-nav-elements d-flex flex-column gap-5 ${isHiddenNav ? 'no-interactive' : ''}`}>
                    <NavbarElement/>

                    <NavbarElement/>

                    <NavbarElement/>

                    <NavbarElement/>
                </div>
            </div>
            
        </>
    )
}


export default NavBar;
