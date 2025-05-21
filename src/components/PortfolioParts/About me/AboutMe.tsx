import { useRef } from "react";
import { IPortfolioPart } from "../../../interfaces/Interfaces";
import { translationSectionAboutMe } from "../../../assets/translations/translations";
import Icon from "../../Icon";
import me from '../../../assets/images/aboutme/yo.png';

const AboutMe = ({language}: IPortfolioPart) => {
    const imgNormal = useRef<HTMLImageElement>(null);
    // const imgLeft = useRef<HTMLImageElement>(null);
    // const imgRigth = useRef<HTMLImageElement>(null);
    const descriptionContainer = useRef<HTMLDivElement>(null);
    const anchorContainer = useRef<HTMLDivElement>(null);
    const containerImg = useRef<HTMLDivElement>(null);
    const textToUse = translationSectionAboutMe[language];
    const clickMeDiv = useRef<HTMLDivElement>(null);

    // const showImg = (typeImg: string, imgNormal: HTMLImageElement, imgLeft: HTMLImageElement, imgRigth: HTMLImageElement) => {
    //     if(window.innerWidth <= 1024) return; 

    //     if(typeImg === '') {
    //         imgNormal.classList.remove('d-none');
    //         imgNormal.classList.add('d-flex');

    //         imgLeft.classList.remove('d-flex');
    //         imgLeft.classList.add('d-none');
            
    //         imgRigth.classList.remove('d-flex');
    //         imgRigth.classList.add('d-none');

    //         return
    //     }

    //     if(typeImg === 'description'){
    //         imgNormal.classList.remove('d-flex');
    //         imgNormal.classList.add('d-none');

    //         imgLeft.classList.add('d-flex');
    //         imgLeft.classList.remove('d-none');
            
    //         imgRigth.classList.remove('d-flex'); 
    //         imgRigth.classList.add('d-none');

    //         return
    //     }

    //     if(typeImg === 'anchor'){
    //         imgNormal.classList.remove('d-flex');
    //         imgNormal.classList.add('d-none');

    //         imgLeft.classList.remove('d-flex');
    //         imgLeft.classList.add('d-none');
            
    //         imgRigth.classList.add('d-flex'); 
    //         imgRigth.classList.remove('d-none');
            
    //         return
    //     }
    // }

    const showInfo = (descriptionContainer: HTMLDivElement, anchorContainer: HTMLDivElement, containerImg: HTMLDivElement, clickMeDiv: HTMLDivElement) => {
        descriptionContainer.classList.remove('translateX-pos-400px-lg-0');
        descriptionContainer.classList.remove('opacity-0');
        anchorContainer.classList.remove('translateX-neg-400px-lg-0');
        anchorContainer.classList.remove('opacity-0');
        containerImg.classList.add('no-interactive');
        containerImg.classList.remove('bright-border');
        clickMeDiv.classList.add('animation-fadeOut-opacity');
        clickMeDiv.classList.remove('bright-border-green');

        setTimeout(() => {
            descriptionContainer.classList.remove('no-interactive');
            anchorContainer.classList.remove('no-interactive');
        }, 500);
    }

    return(
        <section className="max-w-1250 mt-6 mx-auto p-5 d-flex flex-column align-items-center gap-5 animation-fadeIn-opacity " id = "aboutMe">
            <h1 className="text-transform-capitalize color-ligth-purple font-size-sm-8  font-weigth-700 text-center text-wrap-pretty ">{textToUse.description.title}</h1>

            <div className="d-flex align-items-center flex-lg-column gap-lg-3 ">
                <div className="description-container translateX-pos-400px-lg-0 transition-all-04 bg-gradint-normal-purple-lighter-90 border-radius-1 opacity-0 no-interactive" 
                    ref = {descriptionContainer}
                    // onMouseEnter={() => {
                    //     if (imgNormal.current && imgLeft.current && imgRigth.current) {
                    //         showImg('description', imgNormal.current, imgLeft.current, imgRigth.current);
                    //     }
                    // }}

                    // onMouseLeave={() => {
                    //     if (imgNormal.current && imgLeft.current && imgRigth.current) {
                    //         showImg('', imgNormal.current, imgLeft.current, imgRigth.current);
                    //     }
                    // }}
                >   
                    <div className="p-05 w-90 color-white">
                        <div className="bg-gradint-dark-purple-dark-90 p-1 d-flex flex-column gap-1 min-h-250 max-w-500 w-100">
                            <p className="color-lavanda-dark text-transform-capitalize font-size-5 font-weigth-700">{textToUse.description.myName}</p>
                            <p className="color-emerald text-transform-capitalize font-size-4 font-weigth-500">{textToUse.description.charge}</p>
                            <p className="color-white font-size-3 white-space-pre-line">{textToUse.description.resume}</p>
                            <div className="d-flex gap-3">
                                {
                                    textToUse.socialMedia.map((el: any, index: number) => (
                                        <Icon
                                            id = {index} 
                                            key={index}
                                            title = {el.platform}
                                            image = {el.image}
                                            color = "white"
                                            redirection = {el.redirection}
                                            typeRedirection="_blank"
                                            hasToolTip = {false}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="border-radius-100p flex-shrink-0 img-about-me d-flex cursor-pointer z-index-4 no-select bright-border transition-all-04 w-100 h-100 position-relative" 
                    ref = {containerImg}
                    onClick={() => {
                        if(descriptionContainer.current && anchorContainer.current && containerImg.current && clickMeDiv.current){
                            showInfo(descriptionContainer.current, anchorContainer.current, containerImg.current, clickMeDiv.current);
                        }
                    }}
                >
                    <img className="border-radius-100p w-100" src={me} alt="meNormal" ref = {imgNormal} />
                    <div className="position-absolute color-white bg-emerald-dark right-0 top-0 p-2 border-radius-1 bright-border-green click-me d-flex justify-content-center align-items-center" ref = {clickMeDiv}>
                        Click me!!
                    </div>
                    {/* <img className="border-radius-100p w-100 d-none" src="src/assets/images/aboutme/yoLeft.jpg" alt="meLeft" ref = {imgLeft} />
                    <img className="border-radius-100p w-100 d-none" src="src/assets/images/aboutme/yoRight.jpg" alt="meRight" ref = {imgRigth} /> */}
                    
                </div>

                <div className="anchor-container d-flex justify-content-flex-end bg-gradint-normal-purple-lighter-270 translateX-neg-400px-lg-0 transition-all-04 border-radius-1 opacity-0 no-interactive"
                    ref = {anchorContainer}
                    // onMouseEnter={() => {
                    //     if (imgNormal.current && imgLeft.current && imgRigth.current) {
                    //         showImg('anchor', imgNormal.current, imgLeft.current, imgRigth.current);
                    //     }
                    // }}

                    // onMouseLeave={() => {
                    //     if (imgNormal.current && imgLeft.current && imgRigth.current) {
                    //         showImg('', imgNormal.current, imgLeft.current, imgRigth.current);
                    //     }
                    // }}
                >   
                    <div className="p-05 w-90 color-white">
                        <div className="bg-gradint-dark-purple-dark-270 p-1 d-flex flex-column gap-3 min-h-250 max-w-500 w-100">
                            <div className="d-flex gap-3 justify-content-space-between flex-lg-column">
                                <p className="color-emerald text-transform-capitalize font-size-5 font-weigth-700">{textToUse.moreInfo.title}</p>
                                <div className="d-flex gap-1 justify-content-center align-items-center justify-lg-content-left">
                                    <p className="color-emerald d-flex justify-content-center align-items-center">Cv:</p>
                                    <a className="icon icon-white h-min-content w-fit-content border-radius-100p p-1 color-white d-flex justify-content-center align-items-center" download={true} href={textToUse.moreInfo.cv} >
                                        <span className="material-symbols-outlined">
                                            download_2
                                        </span>
                                    </a>
                                </div>
                                
                            </div>
                            
                            <p className="color-white font-size-3 white-space-pre-line"> {textToUse.moreInfo.textBody} </p>
                            

                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default AboutMe;