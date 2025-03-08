import { IContact } from "../../../interfaces/Interfaces";
import Button from "../../Button";
import timerPromise from "../../../assets/utils/timer";
import { useEffect, useState } from "react";
import useModal from "../../../assets/utils/useModal";
import Modal from "../../Modal";
import { IFormValues } from "../../../interfaces/Interfaces";


const Contact = ({ language } : IContact) => {
    const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false);
    const {hideModal, setNameModal, showModal} = useModal();
    const [formData, setFormData] = useState<IFormValues>(
        {
            'email' : '',
            'username' : '',
            'message' : '',
        }
    )
    const [formPartCompleted, setFormPartCompleted] = useState<number>(0)
    const classesByFormPartCompleted = ['test-test-1', 'test-test-2', 'test-test-3', 'test-test-4'];



    const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setNameModal('loadingModal');
        
        setIsLoadingForm(true);

        await timerPromise(3);
        
        setIsLoadingForm(false);
        
        setFormData({
            'email' : '',
            'username' : '',
            'message' : '',
        });

        hideModal();
        return
    }

    const updateValueInput = (id: string, value: string) => {
        setFormData({
            ...formData, [id]: value
        })
    }

    useEffect(() => {
        console.log('formPartCompleted => ', formPartCompleted);
    }, [formPartCompleted])

    

    if(isLoadingForm){
        return(
            <>
                <div className="overflow-modal position-fixed w-100 h-100 bg-grey top-0 z-index-4">
                </div>
                
                <Modal 
                    title = 'Loading Modal'
                    showModal = {showModal('loadingModal')}
                />
            </>
        )
    }

    return(
        <section className="d-flex flex-column gap-6 align-items-center m-3" id = "contact">
            <div className="d-flex flex-column gap-3 max-w-900">
                <p className="color-ligth-purple font-size-sm-8  font-weigth-700 text-center text-wrap-pretty animation-scroll-right-left">¿Necesitas a alguien que resuelva tus problemas? </p>

               
                <p className="text-center font-size-3 font-weigth-400 color-white animation-scroll-fade-in"> A solo un paso de tu solución, hablemos...</p>
                
            </div>

            <form onSubmit = {formSubmit} className={`d-flex flex-column gap-3 max-w-600 w-100 h-300px p-5 border-radius-top-6 ` + classesByFormPartCompleted[formPartCompleted]}>
                    <div className="d-flex gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-shrink-1 flex-grow-1" >
                            <label htmlFor="email" className="color-white">Tu correo electronico:</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} />
                        </div>
                        
                        <div className="d-flex flex-column gap-1 flex-shrink-1 flex-grow-1">
                            <label htmlFor="username" className="color-white">Tu nombre:</label>
                            <input type="text" name="username" id="username" value={formData.username} onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} />
                        </div>
                    </div>

                    
                    <div className="d-flex flex-column gap-1 h-100">
                        <label htmlFor="message" className="color-white">Tu nombre:</label>
                        <textarea  name="message" id="message" className="h-100" value={formData.message} onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} />
                    </div>
                    
                    <div className="w-100 d-flex justify-content-flex-end">
                        <Button
                            type = "submit"
                            text="Enviar"
                            cssClasses="bt-size-1"
                            typeBtn = "primary-emerald"
                            
                        />
                    </div>
                </form>
                    <Button
                            type = "button"
                            text="lol"
                            cssClasses="bt-size-1"
                            typeBtn = "primary-emerald"
                            onClick={() => {
                                if(formPartCompleted >= 3){
                                    setFormPartCompleted(0);
                                    return
                                }
                                setFormPartCompleted(prev => prev + 1);

                            }}
                        />
        </section>

        
    )
}

export default Contact;