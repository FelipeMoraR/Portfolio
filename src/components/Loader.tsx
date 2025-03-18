import {translationsSteps} from "../assets/translations/translations"
import { ILoader } from "../interfaces/Interfaces";
import logo from '../assets/images/stepsImg/logoMora.webp';
import { useEffect, useState } from "react";

const Loader = ({language, currentStep}: ILoader) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const text = translationsSteps[language].loader;
    
    const hideLoader = async () => {
        const body = document.querySelector('body');
        if(!body) return;
        
        body.style.overflow = 'hidden';

        setTimeout(() => {
            setIsVisible(false);
            body.style.overflow = 'auto';
        }, 2500)
    }
    
    useEffect(() => {
        hideLoader();
    }, []);

    return(
        <>
            <div className= 'animation-fadeOut-display d-flex w-100 justify-content-center align-items-center'>
                {currentStep}
            </div>
            

            <div className = "loader-container">
                <div className = {isVisible ? 'top-face' : 'top-face hide'}></div>

                <div className = {isVisible ? 'right-face' : 'right-face hide'}></div>

                <div className = {isVisible ? 'bottom-face' : 'bottom-face hide'}></div>

                <div className = {isVisible ? 'left-face' : 'left-face hide'}></div>

                <div className = {isVisible ? 'central-logo' : 'central-logo hide'}>
                    <img src={logo} alt="logoImg"/>

                    <span className = {isVisible ? 'loader-text' : 'loader-text hide'}>
                        {text}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Loader;