import { useEffect, useRef } from "react";
import translationsSteps from "../../assets/translations/translations";;
import { ISteps } from "../../interfaces/Interfaces";
import timerPromise from "../../assets/utils/timer";
import changeClassAnimation from "../../assets/utils/changeClassAnimation";

const StepFour = ({language, isSkiped}: ISteps) => {
    const textStep = translationsSteps[language].stepFour;

    const divRef = useRef<HTMLDivElement>(null); 

    const addText =  async () => {
        const textSeparated = Array.from(textStep.finalTitle);
        
        for(const letter of textSeparated){
            if(!divRef.current || typeof(letter) != "string") return;
            await timerPromise(.01);
            divRef.current.textContent += letter;
        }
    };

    useEffect(() => {
        if(isSkiped) return;
        addText();
    }, []);

    useEffect(() => {
        const container = document.querySelector('.containter-step-four');
        if(!container) return;

        changeClassAnimation(container);
    }, [])

    return (
        <div className="min-h-100vh d-flex justify-content-center align-items-center containter-step-four">
            <div className="max-w-900 p-3 position-relative">
                <div className="color-white font-size-md-6 font-style-italic" ref={divRef}>
                    {isSkiped ? textStep.finalTitle : null}
                </div>
                
                <div className= {!isSkiped ? "first-letter-color-ligth-purple color-white opacity-0 position-absolute rigth-16 bottom-0 font-size-5 delay-1s animation-fadeIn-opacity" : "first-letter-color-ligth-purple color-white position-absolute rigth-16 bottom-0 font-size-5"}>
                    {textStep.signature}
                </div>
            </div>
            
        </div>
    )
}

export default StepFour;