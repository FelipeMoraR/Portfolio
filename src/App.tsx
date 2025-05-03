import { useEffect, useState } from "react"
import StepOne from "./components/Steps/stepOne";
import StepTwo from "./components/Steps/stepTwo";
import StepThree from "./components/Steps/stepThree";
import StepFour from "./components/Steps/stepFour";
import Portfolio from "./components/Layouts/Portfolio";
import timerPromise from "./assets/utils/timer";
import './App.css';
import ChooseLanguage from "./components/Steps/ChooseLanguage";
import Button from "./components/Button";
import Loader from "./components/Loader";


function App() {
  const [step, setStep] = useState<number>(0);
  const [currentLanguage, setCurrentLanguage] = useState<string>("es");
  const [isLanguageChoosed, setIsLanguageChoosed] = useState<boolean>(false);
  const [isIntroductionSkiped, setIsIntroductionSkiped] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const arraySteps = [
    <StepOne
      language = {currentLanguage}
    />, 
    <StepTwo
      language = {currentLanguage}
    />, 
    <StepThree
      language = {currentLanguage}
    />, 
    <StepFour
      language = {currentLanguage}
    />, 
    <Portfolio
      language = {currentLanguage}
      setCurrentLanguage = {setCurrentLanguage} 
    />
  ]

  const arrayStepSkiped = [
    <StepOne
      language = {currentLanguage}
    />,
    <StepTwo
      language = {currentLanguage}
      isSkiped = {true}
    />, 
    <StepThree
      language = {currentLanguage}
      isSkiped = {true}
    />, 
    <StepFour
      language = {currentLanguage}
      isSkiped = {true}
    />, 
  ]
  
  const setLocalStorage = (value: string)  => localStorage.setItem('language', value);

  const getLocalStorage = (key: string) => {
    const validValues = ['es', 'en', 'pt'];

    const value = localStorage.getItem(key) || '';

    const isValid = validValues.some(validValue => validValue === value);
    
    return {isValid, value};
  }

  

  const timerSteps = async () => {
    await timerPromise(3.5);
    setStep(step + 1);
  }

  const skipIntroduction = async () => {
    setLocalStorage(currentLanguage);
    setIsLoading(true);
    await timerPromise(3);
    setIsIntroductionSkiped(true);
    setIsLoading(false);
  }

  useEffect(() => {
    const {isValid, value} = getLocalStorage('language');

    if(isValid && value !== '') {
      setCurrentLanguage(value);
      setIsIntroductionSkiped(true);
      setIsLanguageChoosed(true);
      return
    }

    if(isIntroductionSkiped) return;

    if(isLoading) return;

    if(!isLanguageChoosed) return;


    if(step == 4) {
      setLocalStorage(currentLanguage);
      return;
    };
   
    timerSteps();
  }, [isLoading, step, isLanguageChoosed, isIntroductionSkiped]);

  if(isLoading) return <Loader language = {currentLanguage} currentStep = {arrayStepSkiped[step]}/>
    
  if(!isLanguageChoosed) return <ChooseLanguage setCurrentLanguage = {setCurrentLanguage} setIsLanguageChoosed = {setIsLanguageChoosed} typeView="firstTime"/>
    
  if(isIntroductionSkiped) return <Portfolio language = {currentLanguage} setCurrentLanguage = {setCurrentLanguage}  />

  return (
    <>
      {
        step >= 1 && step < 4 ? (
          <div className="exit-btn z-index-2 right-0 position-absolute m-3 ">
            <Button
              type = "button"
              cssClasses="btn-size-1"
              typeBtn = "primary-emerald"
              icon="close"
              onClick={skipIntroduction}
            />
          </div>
        ) : null
      }
      
      
      
      {arraySteps[step]}
    </>
    
  )
}

export default App
