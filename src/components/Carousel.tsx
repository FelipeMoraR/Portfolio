import { useEffect, useRef, useState} from "react";
import { ICarousel } from "../interfaces/Interfaces"

const Carousel = ({elements, elementsPerPage} : ICarousel) => {
    
    const [page, setPage] = useState<number>(1);
    const maxPage = Math.ceil(elements.length / elementsPerPage);
    const [elementsGrouped, setElementsGrouped] = useState<Array<any>>([]);
    const boxCertificate = useRef<HTMLDivElement[]>([]);
    
    
    const lastIndex = elements.length - 1;

    useEffect(() => {
        let temporalArray: any = [];

        elements.reduce((array, element, index) => {
            array.push(element);
            
            if(array.length == elementsPerPage) {
                temporalArray.push(array);
                return [];
            }
    
            if(lastIndex === index && array.length > 0) {
                temporalArray.push(array);
                return array;
            }
    
            return array;
        }, []);

        setElementsGrouped(temporalArray);
    }, []);

    return(
        <div>
            <h1 className="color-white">Carousel</h1>

            <div className="carousel-container d-flex gap-3 overflow-hidden ">
                {
                    elementsGrouped.map((element, index) => (
                        <div className="box-certificate flex-shrink-0 position-relative" key={index} 
                            ref = {(el) => {
                                
                                if (!el) return;
                                
                                if(boxCertificate.current.includes(el)) return;
                                
                                boxCertificate.current.push(el);
                            }}
                        >
                                
                            {
                                element.map((cer: any, cerIndex: number) => (
                                    <div key = {cerIndex}>
                                        <p className="color-white">{cer.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }

                
            </div>
            
            <p className="color-white">
                {page}
            </p>

            <div className = {`color-white cursor-pointer ` + (maxPage == page ? 'no-interactive ' : '')} onClick={() => {
                const allElements = boxCertificate.current;
                
                if(!allElements || allElements.length < 0) return;
                
                let valueToTranslate: number = (400 * page) + (16 * page);

                setPage(prev => prev + 1);

                console.log('valueToTranslate => ', valueToTranslate);
                
                allElements.forEach(element => {
                    element.style.transform = `translateX(-${valueToTranslate}px)`;
                    element.style.transition = 'all .4s'
                });

            }}>
                Subir
            </div>


            <div className = {`color-white cursor-pointer `} onClick={() => {
                const allElements = boxCertificate.current;
                
                if(!allElements || allElements.length < 0) return;
                
                
                const multiplerPage = page - 2 <= 0 ? 1 : page - 2;
                const actualPage = page - 1 == 0 ? 1 : page - 1;
                console.log('page actual page => ', actualPage);

                let valueToTranslateReturn : number = actualPage === 1 ? 0 : ((400 * multiplerPage) + (16 * multiplerPage));
                
                console.log('valueToTranslateReturn => ', valueToTranslateReturn);
                

                setPage(prev => prev === 1 ? 1 : prev - 1);

                allElements.forEach(element => {
                    element.style.transform = `translateX(-${valueToTranslateReturn}px)`;
                    element.style.transition = 'all .4s'
                });

            }}>
                Bajar
            </div>
            
        </div>
    )
}

export default Carousel;