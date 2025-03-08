import { IModal } from "../interfaces/Interfaces";

const Modal = ({ showModal, title } : IModal) => {
    if(!showModal) return

    return(
        <div className="z-index-999 position-fixed w-100 h-100 d-flex justify-content-center align-items-center top-0">
            <h1 className="color-white">{title}</h1>
            <p>LETSFAKING GOOOOO</p>
        </div>
    )
}   

export default Modal;