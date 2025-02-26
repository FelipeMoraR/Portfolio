import translationsSteps from "../../assets/translations/translations";
import { ISteps } from "../../interfaces/Interfaces";
import { useEffect } from "react";
import changeClassAnimation from "../../assets/utils/changeClassAnimation";

const StepOne = ({language} : ISteps) => {
    const stepOne = translationsSteps[language].stepOne;

    useEffect(() => {
        const containerStepOne = document.querySelector('.containter-step-one');
        if(!containerStepOne) return;

        changeClassAnimation(containerStepOne);

    }, []);

    return (
        <div className="min-h-100vh w-100 d-flex align-items-center overflow-hidden containter-step-one">
            <div className="position-relative h-lg-300px w-100">
                <div className="position-absolute top-0 left-48p translateX-neg-50 color-white font-size-lg-8 m-3 animation-movement-left-center white-space-no-wrap">
                    {stepOne.titleOne}
                </div>

                <div className="position-absolute bottom-0 rigth-45p translateX-pos-50 color-white font-size-lg-8 m-3 animation-movement-right-center white-space-no-wrap">
                    {stepOne.titleTwo}
                </div>
            </div>
        </div>
        
    )
}

export default StepOne;