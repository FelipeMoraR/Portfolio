import { useState } from "react";


const useModal = () => {
    const [modalToShow, setModalToShow] = useState<string | null>(null);
    
    const setOverflowBody = (overflow: string) => {
        const body = document.querySelector('body');
            
        if(!body) return;
    
        body.style.overflow = overflow;
            
        return;
    }
    const showModal = (modalName: string) => setModalToShow(modalName);
    const hideModal = () => setModalToShow(null);
    const isOpenModal = (modalName: string) => (modalToShow === modalName);
    
    return {showModal, hideModal, isOpenModal, setOverflowBody}
}


export default useModal;


