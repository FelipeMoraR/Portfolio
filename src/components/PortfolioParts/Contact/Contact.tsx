import { IContact } from "../../../interfaces/Interfaces";
import Button from "../../Button";
import { useState } from "react";
import useModal from "../../../assets/utils/useModal";
import Modal from "../../Modal";
import { IFormValues } from "../../../interfaces/Interfaces";
import emailjs from 'emailjs-com';

const Contact = ({ language } : IContact) => {
    
    const [isLoadingForm, setIsLoadingForm] = useState<boolean>(false);
    const {hideModal, setNameModal, showModal} = useModal();
    const [formData, setFormData] = useState<IFormValues>(
        {
            'email' : '',
            'errorEmail': '',
            'username' : '',
            'errorUsername': '',
            'message' : '',
            'errorMessage': ''
        }
    )
    const [formPartCompleted, setFormPartCompleted] = useState<number>(0);
    const classesByFormPartCompleted = ['form-part-1', 'form-part-2', 'form-part-3', 'form-part-4'];
    const emailJsId = import.meta.env.VITE_PUBLIC_USER_ID_MAILJS;

    
    const validateInputIsNotNull = (value: string) => value.trim().length !== 0;

    const validateOnlyLetters = (text: string) => {
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
        return regex.test(text);
    }

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const emailJsFetch = async (event: React.FormEvent<HTMLFormElement>) => {
        try{
            const emailJsResponse = await emailjs.sendForm(
                "contactService", //Service ID
                "contactForm", //Template ID
                event.currentTarget, //Form
                emailJsId //Public user id
            );

            if(emailJsResponse.status !== 200){
                throw new Error('Error sending email');
            }

            return emailJsResponse;
        } catch (err){
            console.error('Error emailJsFetch::: ', err);
            return null;
        }
    };

    const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const emailIsValid = validateInputIsNotNull(formData.email) && validateEmail(formData.email);
        const usernameIsValid = validateInputIsNotNull(formData.username) && validateOnlyLetters(formData.username);
        const messageIsValid = validateInputIsNotNull(formData.message);
       
        const newErrors = {
            errorEmail: validateInputIsNotNull(formData.email) ? (emailIsValid ? '' : 'Email no valido') : 'No puede estar vacío',
            errorUsername: validateInputIsNotNull(formData.username) ? (usernameIsValid ? '' : 'Nombre no valido') : 'No puede estar vacío',
            errorMessage: messageIsValid ? '' : 'No puede estar vacío',
        };
        
        const validInputs = [emailIsValid, usernameIsValid, messageIsValid].filter(Boolean).length; //.filter(Boolean) remove all false values and return a new array with the true values. [true, true]
        
        setFormData(prev => ({ ...prev, ...newErrors }));
        
        setFormPartCompleted(validInputs); 
    
        if (!emailIsValid || !usernameIsValid || !messageIsValid) return;

        setNameModal('loadingModal');
        
        setIsLoadingForm(true);

        await emailJsFetch(event);
        
        setIsLoadingForm(false);
        
        setFormData({
            'email' : '',
            'errorEmail': '',
            'username' : '',
            'errorUsername': '',
            'message' : '',
            'errorMessage': ''
        });

        setFormPartCompleted(0);

        hideModal();
        return
    };

    const updateValueInput = (id: string, value: string) => {
        setFormData((prev) => {
            const updatedForm = { ...prev, [id]: value };

            const validInputs = ['email', 'username', 'message'].filter(
                (field) => validateInputIsNotNull(updatedForm[field as keyof IFormValues])
            ).length;

            setFormPartCompleted(validInputs);

            return updatedForm;
        });
    };

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
        <section className="d-flex flex-column gap-6 align-items-center m-3 mb-0" id = "contact">
            <div className="d-flex flex-column gap-3 max-w-900">
                <p className="color-ligth-purple font-size-sm-8  font-weigth-700 text-center text-wrap-pretty ">¿Necesitas a alguien que resuelva tus problemas? </p>

               
                <p className="text-center font-size-3 font-weigth-400 color-white "> A solo un paso de tu solución, hablemos...</p>
                
            </div>

            <form onSubmit = {formSubmit} className={`d-flex flex-column gap-3 max-w-600 w-100 h-600 p-5 border-radius-top-6 ` + classesByFormPartCompleted[formPartCompleted]}>
                    <div className="d-flex gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-shrink-1 flex-grow-1 flex-basis-0">
                            <label htmlFor="username" className="color-white">Tu nombre:</label>
                            <input className="contact-input border-radius-1 p-05 bg-dark-purple-light color-white" type="text" name="username" id="username" value={formData.username} 
                            onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} 
                            />
                            <p className = "error-input font-weigth-400">{formData.errorUsername}</p>
                        </div>


                        <div className="d-flex flex-column gap-1 flex-shrink-1 flex-grow-1 flex-basis-0" >
                            <label htmlFor="email" className="color-white">Tu correo electronico:</label>
                            <input className="contact-input border-radius-1 p-05 bg-dark-purple-light color-white" type="text" name="email" id="email" value={formData.email} onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} />
                            <p className = "error-input font-weigth-400">{formData.errorEmail}</p>
                        </div>
                    </div>

                    
                    <div className="d-flex flex-column gap-1 h-100">
                        <label htmlFor="message" className="color-white">Tu mensaje:</label>
                        <textarea  className="contact-input h-100 border-radius-1 p-05 bg-dark-purple-light color-white" name="message" id="message"  value={formData.message} onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} />
                        <p className = "error-input font-weigth-400">{formData.errorMessage}</p>
                    </div>
                    
                    <div className="w-100 d-flex justify-content-flex-end">
                        <Button
                            type = "submit"
                            cssClasses="bt-size-1"
                            typeBtn = "primary-emerald"
                            icon="send"
                            
                        />
                    </div>
                </form>
        </section>

        
    )
}

export default Contact;