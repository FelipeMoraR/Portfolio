
import { IModal } from "../interfaces/Interfaces";
import { createPortal } from "react-dom";

const Modal = ({ showModal, title, typeModal, text, statusModal, iconModal, hideModal }: IModal) => {
    if (!showModal) return

    const classIcon = {
        mark_email_read: 'icon-green',
        warning: 'icon-error'
    }

    return createPortal(
        <>
            <div className={`overflow-modal  position-fixed w-100 h-100 bg-overflow-modal top-0 z-index-999 ` + ( typeModal !== 'loading' ? 'cursor-pointer' : '')}
                onClick={() => {
                    if(typeModal === 'loading') return
                    
                    if(hideModal) hideModal();

                    return;
                }}
            >   
            </div>

            <div className={`z-index-999 bg-black-solid position-fixed center-position-absolute border-solid-light-purple-2 box-shadow-light-purple-0-0-20 border-radius-3 w-100 h-100  top-0 size-modal animation-show-modal ` + (typeModal === 'image' ? 'modal-img' : '')}>
                <div className="position-relative w-100 h-100 d-flex justify-content-center align-items-center flex-column gap-3 p-3">

                    {
                        typeModal !== 'loading' ? (
                            <span onClick={hideModal} className="material-symbols-outlined position-absolute top-0 right-0 m-6 cursor-pointer color-adaptative">
                                close
                            </span>
                        ) : null
                    }



                    {
                        typeModal === 'text' ? (
                            <>
                                <div>
                                    <p className="color-white font-size-5 font-weigth-600 animation-fadeIn-opacity">{title}</p>
                                </div>

                                <div>
                                    {
                                        iconModal != '' ? (
                                            <span className={`material-symbols-outlined ${classIcon[iconModal as keyof typeof classIcon]}`}>
                                                {iconModal}
                                            </span>
                                        ) : null
                                    }
                                    <p className="color-light-purple-light">{text}</p>

                                </div>
                            </>


                        ) : null
                    }

                    {
                        typeModal === 'image' ? (
                            <div className="w-100 h-100 overflow-auto m-1">
                                <img className="w-100" src={text} alt={text} />
                            </div>
                        ) : null
                    }

                    {
                        typeModal === 'loading' ? (
                            <>
                                <div>
                                    <p className="color-white font-size-5 font-weigth-600 animation-fadeIn-opacity">{title}</p>
                                </div>

                                <div
                                    className={`loader-animation w-100 h-100  p-05 position-relative overflow-hidden bg-dark-purple border-radius-100p animation-fadeIn-opacity delay-05s opacity-0 ${statusModal}`}>
                                    
                                    <div className=" w-100 h-100 bg-dark-purple-light z-index-3 position-relative border-radius-100p"></div>
                                </div>
                            </>

                        ) : null
                    }
                </div>
            </div>
        </>,
        document.getElementById('modal-root') as HTMLElement
    );
}

export default Modal;