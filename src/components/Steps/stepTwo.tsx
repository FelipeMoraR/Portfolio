import { ISteps } from "../../interfaces/Interfaces";
import {translationsSteps} from "../../assets/translations/translations";
import { useEffect } from "react";
import changeClassAnimation from "../../assets/utils/changeClassAnimation";

const StepTwo = ({language, isSkiped}: ISteps) => {
    const textStep = translationsSteps[language].stepTwo;

    useEffect(() => {
        const containerStepOne = document.querySelector('.containter-step-two');
       
        if(!containerStepOne) return;

        changeClassAnimation(containerStepOne);

    }, []);

    return (
        <div className = "containter-step-two min-h-100vh w-100 d-flex align-items-center justify-content-center flex-column gap-3">
            <div className = {!isSkiped ? "d-flex align-items-center justify-content-center flex-column animation-fadeIn-opacity" : "d-flex align-items-center justify-content-center flex-column"}>
                <div className = "color-white font-size-md-4">
                    {textStep.titleName}
                </div>

                <div className = "color-ligth-purple font-weigth-600 font-size-md-12">
                    {textStep.name}
                </div>
            </div>

            <div className = "stp2-description-text-container">
                <div className = {!isSkiped ? "color-white font-size-xxl-6 delay-05s typing-animation " : "color-white font-size-xxl-6"}>
                    {textStep.description}
                </div>
            </div>
            
        </div>
    )
}

export default StepTwo;