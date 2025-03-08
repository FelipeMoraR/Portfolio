import { useState } from "react";


const useModal = () => {
    const [modalToShow, setModalToShow] = useState<string | null>(null);

    const setNameModal = (modalName: string) => setModalToShow(modalName);
    const hideModal = () => setModalToShow(null);
    const showModal = (modalName: string) => (modalToShow === modalName);
    
    return {setNameModal, hideModal, showModal}
}

export default useModal;