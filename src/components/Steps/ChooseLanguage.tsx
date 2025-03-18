import Button from "../Button";
import timerPromise from "../../assets/utils/timer";
import { IChooseLanguage } from "../../interfaces/Interfaces";
import { useRef, useState } from "react";
import Loader from "../Loader";

const ChooseLanguage = ({ setCurrentLanguage, setIsLanguageChoosed, typeView, language }: IChooseLanguage) => {

  const [isLoadingNewLanguage, setIsLoadingNewLanguage] = useState<boolean>(false);

  const languageSelector = useRef<HTMLDivElement>(null);


  const chooseLanguage = async (language: string) => {
    const languageSelectorValid = languageSelector.current;

    if (!languageSelectorValid) {
      console.log('container language-selector not founded');
      return;
    }

    languageSelectorValid.classList.remove('animation-fadeIn-opacity');
    languageSelectorValid.classList.add('animation-fadeOut-opacity');

    await timerPromise(.5);

    setCurrentLanguage(language);
    if (setIsLanguageChoosed) setIsLanguageChoosed(true);
  }


  const updateLanguagePage = (newLanguage: string) => {

    setIsLoadingNewLanguage(true);


    setTimeout(() => {
      setCurrentLanguage(newLanguage);
    }, 800);

    setTimeout(() => {
      setIsLoadingNewLanguage(false);
    }, 2700);
  }


  if (typeView === 'page') {
    return (
      <>
        {
          isLoadingNewLanguage ? (
            <Loader
              language={language ? language : 'es'}
            />
          ) : null
        }

        <div className="d-flex justify-content-flex-end animation-fadeIn-opacity mx-3" >
          <div className="d-flex gap-3 p-1">
            <div className="border-radius-100p position-relative flag-icon-page border-solid-white-1 cursor-pointer" onClick={() => updateLanguagePage('es')} >
              <img className="w-100 h-100 border-radius-100p object-fit-cover" src="src/assets/images/flags/cl.png" alt="esFlag" />

              <p className="color-white opacity-0 font-size-2 text-center">Es</p>
            </div>

            <div className="border-radius-100p position-relative flag-icon-page border-solid-white-1 cursor-pointer" onClick={() => updateLanguagePage('en')}>
              <img className="w-100 h-100 border-radius-100p object-fit-cover" src="src/assets/images/flags/us.png" alt="enFlag" />

              <p className="color-white opacity-0 font-size-2 text-center">En</p>
            </div>


            <div className="border-radius-100p position-relative flag-icon-page border-solid-white-1 cursor-pointer" onClick={() => updateLanguagePage('pt')} >
              <img className="w-100 h-100 border-radius-100p object-fit-cover " src="src/assets/images/flags/br.png" alt="ptFlag" />

              <p className="color-white opacity-0 font-size-2 text-center">Pt</p>
            </div>
          </div>

        </div>

      </>

    )
  }

  return (
    <div className="language-selector animation-fadeIn-opacity d-flex justify-content-center align-items-center gap-3 min-h-100vh flex-column no-select p-1" ref={languageSelector}>

      <h1 className="color-white font-size-5 font-weigth-400 text-center">Choose your <span className="color-ligth-purple font-weigth-800">language</span></h1>

      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <div className="position-relative container-flag d-flex flex-column align-items-center gap-1">
          <div className="container-img-flag">
            <img src="src/assets/images/flags/cl.png" alt="esFlag" />

            <Button
              text="Spanish"
              type="button"
              cssClasses="position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
              typeBtn="custom"
              onClick={() => chooseLanguage('es')}
            />
          </div>

          <div className="color-white text-center font-style-italic ">
            <p>es</p>
          </div>

        </div>

        <div className="position-relative container-flag d-flex flex-column align-items-center gap-1">
          <div className="container-img-flag">
            {/* <img src="https://flagsapi.com/US/shiny/64.png" alt="usFlag" /> */}
            <img src="src/assets/images/flags/us.png" alt="usFlag" />
            <Button
              text="English"
              type="button"
              cssClasses="position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
              typeBtn="custom"
              onClick={() => chooseLanguage('en')}
            />
          </div>

          <div className="color-white text-center font-style-italic ">
            <p>en</p>
          </div>

        </div>

        <div className="position-relative container-flag d-flex flex-column align-items-center gap-1">
          <div className="container-img-flag">
            <img src="src/assets/images/flags/br.png" alt="ptFlag" />

            <Button
              text="Portuguese"
              type="button"
              cssClasses="position-absolute left-0 h-100 w-100 opacity-0 cursor-pointer"
              typeBtn="custom"
              onClick={() => chooseLanguage('pt')}
            />
          </div>

          <div className="color-white text-center font-style-italic ">
            <p>pt</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseLanguage;