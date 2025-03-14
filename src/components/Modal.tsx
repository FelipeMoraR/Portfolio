import { IModal } from "../interfaces/Interfaces";

const Modal = ({ showModal, title, typeModal, text, statusModal, hideModal } : IModal) => {
    if(!showModal) return
    
    return(
        <>
            <div className="overflow-modal position-fixed w-100 h-100 bg-overflow-modal top-0 z-index-4">
            </div>

            <div className="z-index-999 position-fixed center-position-absolute bg-normal-purple border-solid-light-purple-2 box-shadow-light-purple-0-0-20 border-radius-3 w-100 h-100 d-flex justify-content-center align-items-center top-0 d-flex flex-column gap-3 size-modal max-h-300 animation-show-modal">
                <div>
                    <p className="color-white font-size-5 animation-fadeIn-opacity">{title}</p>
                </div>

                {
                    typeModal === 'loading' ? (
                        <div 
                            className={`loader-animation w-100 h-100  p-05 position-relative overflow-hidden bg-dark-purple border-radius-100p animation-fadeIn-opacity delay-05s opacity-0 ${statusModal}` }>
                            <div className=" w-100 h-100 bg-normal-purple z-index-3 position-relative border-radius-100p"></div>
                        </div>
                            
                    ) : (
                        <p onClick={hideModal}>{text}</p>
                    )
                } 
            </div>
        </>
    )
}   

export default Modal;