import { useRef } from "react";
import { IPortfolioPart } from "../../../interfaces/Interfaces";


const AboutMe = ({language}: IPortfolioPart) => {
    const imgNormal = useRef<HTMLImageElement>(null);
    const imgLeft = useRef<HTMLImageElement>(null);
    const imgRigth = useRef<HTMLImageElement>(null);
    const descriptionContainer = useRef<HTMLDivElement>(null);
    const anchorContainer = useRef<HTMLDivElement>(null);
    const containerImg = useRef<HTMLDivElement>(null);


    const showImg = (typeImg: string, imgNormal: HTMLImageElement, imgLeft: HTMLImageElement, imgRigth: HTMLImageElement) => {
        if(typeImg === '') {
            imgNormal.classList.remove('d-none');
            imgNormal.classList.add('d-flex');

            imgLeft.classList.remove('d-flex');
            imgLeft.classList.add('d-none');
            
            imgRigth.classList.remove('d-flex');
            imgRigth.classList.add('d-none');

            return
        }

        if(typeImg === 'description'){
            imgNormal.classList.remove('d-flex');
            imgNormal.classList.add('d-none');

            imgLeft.classList.add('d-flex');
            imgLeft.classList.remove('d-none');
            
            imgRigth.classList.remove('d-flex'); 
            imgRigth.classList.add('d-none');

            return
        }

        if(typeImg === 'anchor'){
            imgNormal.classList.remove('d-flex');
            imgNormal.classList.add('d-none');

            imgLeft.classList.remove('d-flex');
            imgLeft.classList.add('d-none');
            
            imgRigth.classList.add('d-flex'); 
            imgRigth.classList.remove('d-none');
            
            return
        }
    }

    const showInfo = (descriptionContainer: HTMLDivElement, anchorContainer: HTMLDivElement, containerImg: HTMLDivElement) => {
        descriptionContainer.classList.remove('translateX-pos-400px');
        anchorContainer.classList.remove('translateX-neg-400px');
        containerImg.classList.add('no-interactive');
    }

    return(
        <section className="max-w-1250 m-auto p-5 d-flex flex-column align-items-center gap-5 animation-fadeIn-opacity position-relative z-index-4" id = "aboutMe">
            <h1 className="text-transform-capitalize color-ligth-purple font-size-sm-8  font-weigth-700 text-center text-wrap-pretty ">about mi jeje</h1>

            <div className="d-flex align-items-center">
                <div className="description-container color-white bg-grey max-h-300 cursor-pointer translateX-pos-400px" 
                    ref = {descriptionContainer}
                    onMouseEnter={() => {
                        if (imgNormal.current && imgLeft.current && imgRigth.current) {
                            showImg('description', imgNormal.current, imgLeft.current, imgRigth.current);
                        }
                    }}

                    onMouseLeave={() => {
                        if (imgNormal.current && imgLeft.current && imgRigth.current) {
                            showImg('', imgNormal.current, imgLeft.current, imgRigth.current);
                        }
                    }}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>

                <div className="border-radius-100p flex-shrink-0 max-w-500 cursor-pointer z-index-4 no-select " 
                    ref = {containerImg}
                    onClick={() => {
                        if(descriptionContainer.current && anchorContainer.current && containerImg.current){
                            showInfo(descriptionContainer.current, anchorContainer.current, containerImg.current);
                        }
                    }}
                >
                    <img className="border-radius-100p w-100 h-100" src="src/assets/images/aboutme/yo.jpg" alt="meNormal" ref = {imgNormal} />
                    <img className="border-radius-100p w-100 h-100 d-none" src="src/assets/images/aboutme/yoLeft.jpg" alt="meLeft" ref = {imgLeft} />
                    <img className="border-radius-100p w-100 h-100 d-none" src="src/assets/images/aboutme/yoRight.jpg" alt="meRight" ref = {imgRigth} />
                </div>

                <div className="anchor-container color-white bg-grey max-h-300 cursor-pointer translateX-neg-400px"
                    ref = {anchorContainer}
                    onMouseEnter={() => {
                        if (imgNormal.current && imgLeft.current && imgRigth.current) {
                            showImg('anchor', imgNormal.current, imgLeft.current, imgRigth.current);
                        }
                    }}

                    onMouseLeave={() => {
                        if (imgNormal.current && imgLeft.current && imgRigth.current) {
                            showImg('', imgNormal.current, imgLeft.current, imgRigth.current);
                        }
                    }}
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;