import { IPortfolioPart } from "../../../interfaces/Interfaces";
import { translationSectionCertificates } from "../../../assets/translations/translations";
import Carousel from "../../Carousel";


const Certificates = ({language}: IPortfolioPart) => {
    const textToRender = translationSectionCertificates[language];

    return(
        <section className="max-w-1250 m-auto p-3 d-flex flex-column align-items-center gap-5" id = "certificates">
            <p className="color-ligth-purple font-size-sm-8  font-weigth-700 text-center text-wrap-pretty ">{textToRender.title}</p>


            <Carousel 
                elements={translationSectionCertificates[language].certificates}
                elementsPerPage={2}
            />
        </section>
    )
}

export default Certificates;