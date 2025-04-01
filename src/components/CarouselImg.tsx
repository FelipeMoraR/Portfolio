import { useEffect, useRef, useState } from "react";
import { ICarousel } from "../interfaces/Interfaces"
import Button from "./Button";


const CarouselImg = ({ elements, elementsPerPage }: ICarousel) => {

    const [page, setPage] = useState<number>(1);
    const [elementsGrouped, setElementsGrouped] = useState<Array<any>>([]);

    const containerCarousel = useRef<HTMLDivElement>(null);
    const boxsCertificate = useRef<HTMLDivElement[]>([]);
    
    const maxPage = Math.ceil(elements.length / elementsPerPage);
    const lastIndex = elements.length - 1;



    const resetCarrousel = () => {
        setPage(1);
        boxsCertificate.current.forEach(element => {
            element.style.transform = `translateX(0px)`;
            element.style.transition = 'all .4s'
        });
    }

    const controlMovementCarouse = (containerCarruselWidth: number, allElements: Array<any>, maxPage: number, typeMovement: string) => {
        if (typeMovement === 'next') {
            let valueToTranslate: number = (containerCarruselWidth * page) + (16 * page);

            if (maxPage === page) return;

            setPage(prev => prev + 1);

            allElements.forEach(element => {
                element.style.transform = `translateX(-${valueToTranslate}px)`;
                element.style.transition = 'all .4s'
            });

            return
        }

        if (typeMovement === 'prev') {
            const prevPage = page - 2 <= 0 ? 1 : page - 2;
            const actualPage = page - 1 == 0 ? 1 : page - 1;

            let valueToTranslateReturn: number = actualPage === 1 ? 0 : ((containerCarruselWidth * prevPage) + (16 * prevPage));

            setPage(prev => prev === 1 ? 1 : prev - 1);

            allElements.forEach(element => {
                element.style.transform = `translateX(-${valueToTranslateReturn}px)`;
                element.style.transition = 'all .4s'
            });

            return
        }
    }

    useEffect(() => {
        let temporalArray: any = [];

        elements.reduce((array, element, index) => {
            array.push(element);

            if (array.length == elementsPerPage) {
                temporalArray.push(array);
                return [];
            }

            if (lastIndex === index && array.length > 0) {
                temporalArray.push(array);
                return array;
            }

            return array;
        }, []);

        setElementsGrouped(temporalArray);

        window.addEventListener('resize', resetCarrousel);

        return () => window.removeEventListener('resize', resetCarrousel);
    }, [elements, elementsPerPage]);

    return (
        <>
            <div className="w-100 d-flex flex-column align-items-center position-relative">

                <div className="carousel-container d-flex gap-3 overflow-hidden " ref={containerCarousel}>
                    {
                        elementsGrouped.map((element, index) => (
                            <div className="box-certificate border-solid-normal-emerald-light-2 border-radius-2 p-3 flex-shrink-0 position-relative d-flex gap-6" key={index}
                                ref={(el) => {
                                    if (!el) return;

                                    if (boxsCertificate.current.includes(el)) return;

                                    boxsCertificate.current.push(el);
                                }}
                            >

                                {
                                    element.map((img: any, imgIndex: number) => (
                                        <div key={imgIndex} className="w-100 h-100 d-flex flex-column gap-3 p-3 ">
                                            

                                            <div className="w-100 h-100 d-flex justify-content-center overflow-hidden">
                                                <img src={img} alt={'imgInner' + imgIndex} className="w-100 h-100 object-fit-cover no-select " />
                                            </div>


                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }


                </div>



                <div className="d-flex gap-6 p-3">
                    <Button
                        type="button"
                        icon="chevron_right"
                        cssClasses="btn-size-1 btn-carousel-next-btn no-select flex-order-2"
                        typeBtn="primary-emerald"
                        disabled={maxPage === page ? true : false}
                        onClick={() => {
                            const allElements = boxsCertificate.current;
                            const containerCarruselWidth = containerCarousel.current ? containerCarousel.current.getBoundingClientRect().width : 800;

                            if (!allElements || allElements.length < 0) return;

                            controlMovementCarouse(containerCarruselWidth, allElements, maxPage, 'next');
                        }}
                    />

                    <p className="color-light-emerald-light-shadow flex-order-1 font-size-4 no-select">
                        {page}
                    </p>

                    <Button
                        type="button"
                        icon="chevron_left"
                        cssClasses="btn-size-1 btn-carousel-prev-btn no-select flex-order-0"
                        typeBtn="primary-emerald"
                        disabled={page === 1 ? true : false}
                        onClick={() => {
                            const allElements = boxsCertificate.current;
                            const containerCarruselWidth = containerCarousel.current ? containerCarousel.current.getBoundingClientRect().width : 800;

                            if (!allElements || allElements.length < 0) return;

                            controlMovementCarouse(containerCarruselWidth, allElements, maxPage, 'prev');
                        }}
                    />
                </div>


            </div>
        </>

    )
}

export default CarouselImg;