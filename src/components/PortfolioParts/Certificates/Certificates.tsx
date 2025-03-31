import { IPortfolioPart } from "../../../interfaces/Interfaces";
import { translationSectionCertificates } from "../../../assets/translations/translations";
import CarouselCertificate from "../../CarouselCertificate";
import { useEffect, useState } from "react";


const Certificates = ({language}: IPortfolioPart) => {
    const firstInnerWidth = window.innerWidth;
    const [elementsPerPage, setElementsPerPage] = useState<number>(firstInnerWidth > 1024 ? 2 : 1 );

    const controlElementsPerPage = (e : any) => {
        if(e.currentTarget.innerWidth > 1024){
            setElementsPerPage(2);
            return;
        }

        setElementsPerPage(1);
        
        return;
    }

    useEffect(() => {
        window.addEventListener('DOMContentLoaded', controlElementsPerPage);

        window.addEventListener('resize', controlElementsPerPage);

        return () => {
            window.removeEventListener('resize', controlElementsPerPage);
            window.removeEventListener('DOMContentLoaded', controlElementsPerPage);
        }
    }, []);


    const textToRender = translationSectionCertificates[language];

    return(
        <section className="max-w-1250 mt-6 mx-auto p-5 d-flex flex-column align-items-center gap-5 animation-fadeIn-opacity  " id = "certificates">
            <p className="color-ligth-purple font-size-sm-8  font-weigth-700 text-center text-wrap-pretty ">{textToRender.title}</p>


            <CarouselCertificate 
                elements={translationSectionCertificates[language].certificates}
                elementsPerPage={elementsPerPage}
            />
        </section>
    )
}

export default Certificates;