import { useEffect, useRef, useState } from "react";
import { ICarousel } from "../interfaces/Interfaces"
import Button from "./Button";
import useModal from "../assets/utils/useModal";
import Modal from "./Modal";


const Carousel = ({ elements, elementsPerPage }: ICarousel) => {

    const [page, setPage] = useState<number>(1);
    const [elementsGrouped, setElementsGrouped] = useState<Array<any>>([]);
    const [imgModal, setImgModal] = useState<string>('');

    const containerCarousel = useRef<HTMLDivElement>(null);
    const boxsCertificate = useRef<HTMLDivElement[]>([]);

    const {hideModal, isOpenModal, setOverflowBody, showModal} = useModal();
    
    const maxPage = Math.ceil(elements.length / elementsPerPage);
    const lastIndex = elements.length - 1;


    const hideModalCertificate = () => {
        hideModal();
        setOverflowBody('auto');
    }

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
            const multiplerPage = page - 2 <= 0 ? 1 : page - 2;
            const actualPage = page - 1 == 0 ? 1 : page - 1;

            let valueToTranslateReturn: number = actualPage === 1 ? 0 : ((containerCarruselWidth * multiplerPage) + (16 * multiplerPage));

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
            <Modal
                showModal = {isOpenModal('certificate')}
                title = "test img"
                typeModal = "image"
                text = {imgModal}
                hideModal = {hideModalCertificate}

            />

            <div className="w-100 d-flex flex-column align-items-center position-relative">

                <div className="carousel-container d-flex gap-3 overflow-hidden " ref={containerCarousel}>
                    {
                        elementsGrouped.map((element, index) => (
                            <div className="box-certificate border-solid-light-purple-1 border-radius-2 p-3 flex-shrink-0 position-relative d-flex gap-6" key={index}
                                ref={(el) => {
                                    if (!el) return;

                                    if (boxsCertificate.current.includes(el)) return;

                                    boxsCertificate.current.push(el);
                                }}
                            >

                                {
                                    element.map((cer: any, cerIndex: number) => (
                                        <div key={cerIndex} className="w-100 h-100 d-flex flex-column gap-3 p-3 ">
                                            <div className="d-flex justify-content-space-between ">
                                                <div>
                                                    <p className="color-white font-size-5">{cer.title}</p>
                                                    <p className="color-white font-size-3">{cer.enterprice}</p>
                                                </div>


                                                <a href={cer.img} download={true} className="color-white" >descargar</a>
                                            </div>

                                            <div className="w-100 h-100 d-flex justify-content-center overflow-hidden">
                                                <img src={cer.img} alt={cer.img} className="w-100 h-100 object-fit-cover no-select cursor-pointer" 
                                                    onClick={(e) => {
                                                        console.log(e.currentTarget.src);
                                                        setImgModal(e.currentTarget.src);
                                                        setOverflowBody('hidden');
                                                        showModal('certificate');
                                                    }}
                                                />
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
                        typeBtn="primary-purple"
                        disabled={maxPage === page ? true : false}
                        onClick={() => {
                            const allElements = boxsCertificate.current;
                            const containerCarruselWidth = containerCarousel.current ? containerCarousel.current.getBoundingClientRect().width : 800;

                            if (!allElements || allElements.length < 0) return;

                            controlMovementCarouse(containerCarruselWidth, allElements, maxPage, 'next');
                        }}
                    />

                    <p className="color-light-purple-light-shadow flex-order-1 font-size-4 no-select">
                        {page}
                    </p>

                    <Button
                        type="button"
                        icon="chevron_left"
                        cssClasses="btn-size-1 btn-carousel-prev-btn no-select flex-order-0"
                        typeBtn="primary-purple"
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

export default Carousel;