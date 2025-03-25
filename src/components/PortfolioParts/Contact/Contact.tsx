import { IContact } from "../../../interfaces/Interfaces";
import Button from "../../Button";
import { useEffect, useState } from "react";
import useModal from "../../../assets/utils/useModal";
import Modal from "../../Modal";
import { IFormValues } from "../../../interfaces/Interfaces";
import { validateInputIsNotNull, validateOnlyLetters, validateEmail} from "../../../assets/utils/formValidation";
import { emailJsFetch } from "../../../assets/utils/fetchs";
import { translationSectionContact } from "../../../assets/translations/translations";
import timerPromise from "../../../assets/utils/timer";

const Contact = ({ language } : IContact) => {
    const {hideModal, showModal, isOpenModal, setOverflowBody} = useModal();
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
    const [counterClickForm, setCounterClickForm] = useState<number>(0);
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(10);
    
    const [statusModalLoading, setStatusModalLoading] = useState<string>('');
    const [configModalResult, setConfigModalResult] = useState<any>({
        text: '',
        icon: ''
    });

    const classesByFormPartCompleted = ['form-part-1', 'form-part-2', 'form-part-3', 'form-part-4'];
    const emailJsId = import.meta.env.VITE_PUBLIC_USER_ID_MAILJS;
    const textToUse = translationSectionContact[language];

    const controlModalStatus = async (status: string) => {
        setStatusModalLoading(status);
        await timerPromise(1);
        setStatusModalLoading('');
    }

    const showResultModal = (object: any) => {
        setConfigModalResult(object);
        showModal('resultModal');
    }

    const hideModalContact = () => {
        hideModal();
        setOverflowBody('auto');
        setConfigModalResult({
            text: '',
            icon: ''
        });

    }

    const validateInputs = (formData: IFormValues) => {
        const emailIsValid = validateInputIsNotNull(formData.email) && validateEmail(formData.email);
        const usernameIsValid = validateInputIsNotNull(formData.username) && validateOnlyLetters(formData.username);
        const messageIsValid = validateInputIsNotNull(formData.message);
        
        const newErrors = {
            errorEmail: validateInputIsNotNull(formData.email) ? (emailIsValid ? '' : textToUse.form.errorEmail) : textToUse.form.errorInputEmpty,
            errorUsername: validateInputIsNotNull(formData.username) ? (usernameIsValid ? '' : textToUse.form.errorUsername) : textToUse.form.errorInputEmpty,
            errorMessage: messageIsValid ? '' : textToUse.form.errorInputEmpty
        };
        
        const validInputs = [emailIsValid, usernameIsValid, messageIsValid].filter(Boolean).length; //.filter(Boolean) remove all false values and return a new array with the true values. [true, true]
        
        setFormData(prev => ({ ...prev, ...newErrors }));
        
        setFormPartCompleted(validInputs);
        
        if (!emailIsValid || !usernameIsValid || !messageIsValid) return false;

        return true;
    }

    const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        setCounterClickForm(prev => prev + 1);
        
        const formIsReady = validateInputs(formData);
        
        if(!formIsReady) return;
        
        setOverflowBody('hidden');

        showModal('loadingModal');
        
        const emailJsResponse = await emailJsFetch(event, emailJsId);

        await timerPromise(3);

        await controlModalStatus(emailJsResponse ? 'loading-success' : 'loading-error');
        
        showResultModal(emailJsResponse ? {text: textToUse.form.responseOk, icon: 'mark_email_read'} : {text: textToUse.form.responseNoOk, icon: 'warning'});
        
        setFormData({
            'email' : '',
            'errorEmail': '',
            'username' : '',
            'errorUsername': '',
            'message' : '',
            'errorMessage': ''
        });

        setFormPartCompleted(0);

        return
    };

    const updateValueInput = (id: string, value: string) => {
        setFormData((prev) => {

            const updatedForm = { ...prev, [id]: value, 'errorEmail': '', 'errorUsername': '', 'errorMessage': ''};

            const validInputs = ['email', 'username', 'message'].filter(
                (field) => validateInputIsNotNull(updatedForm[field as keyof IFormValues])
            ).length; //Iterate tho the keys of the object and check if the value is not empty
            console.log('valid => ', validInputs);
            setFormPartCompleted(validInputs);

            return updatedForm;
        });
    };

    

    useEffect(() => {
        if(counterClickForm > 3) {
            setBtnDisabled(true);
            
            const interval = setInterval(() => {
                setTimer(prevTimer => {
                    if(prevTimer === 0) {
                        clearInterval(interval); //Stop interval
                        setBtnDisabled(false);
                        setCounterClickForm(0);
                        return 10;
                    }

                    return prevTimer - 1;
                })
            }, 1000);

            return() => clearInterval(interval)
        }

        if(counterClickForm === 0) return;
        
        const intervalInactivity = setInterval(() => {
            console.log('restore counter click by inactivity');
            setCounterClickForm(0);
        }, 3000)

        return () => {
            console.log('destroyed intervalInactivity');
            clearInterval(intervalInactivity);
        }
        
    }, [counterClickForm]);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return(
        <>
        
        <Modal 
            title = {textToUse.form.sendingEmail}
            showModal = {isOpenModal('loadingModal')}
            typeModal="loading"
            statusModal = {statusModalLoading} 
        />
          
       <Modal 
            title = {configModalResult.text}
            showModal = {isOpenModal('resultModal')}
            typeModal="text"    
            iconModal={configModalResult.icon}
            hideModal={hideModalContact} 
        />
            

        <section className="d-flex max-w-1250 m-auto px-6 flex-column gap-3 align-items-center m-3 mb-0 animation-fadeIn-opacity" id = "contact">
            <div className="d-flex flex-column gap-3 max-w-900">
                <p className="color-ligth-purple font-size-sm-8  font-weigth-700 text-center text-wrap-pretty "> {textToUse.titles.titleOne} </p>

               
                <p className="text-center font-size-3 font-weigth-400 color-white "> {textToUse.titles.titleTwo} </p>
                
            </div>

            <form onSubmit = {formSubmit} className={`d-flex flex-column gap-3 max-w-600 w-100 h-600 p-5 border-radius-top-6 ` + classesByFormPartCompleted[formPartCompleted]}>
                    <div className="d-flex gap-3 flex-wrap">
                        <div className="d-flex flex-column gap-1 flex-shrink-1 flex-grow-1 flex-basis-0">
                            <label htmlFor="username" className="color-white">{textToUse.form.labelName}</label>
                            <input 
                                className={"contact-input border-radius-1 p-05 bg-dark-purple-light color-white " + (formData.errorUsername != '' ? 'error-input' : '')}
                                type="text" 
                                name="username" 
                                id="username" 
                                value={formData.username} 
                                onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} 
                            />
                            <p className = "error-text font-weigth-400">{formData.errorUsername}</p>
                        </div>


                        <div className="d-flex flex-column gap-1 flex-shrink-1 flex-grow-1 flex-basis-0" >
                            <label htmlFor="email" className="color-white">{textToUse.form.labelEmail}</label>
                            <input 
                                className={"contact-input border-radius-1 p-05 bg-dark-purple-light color-white " + (formData.errorEmail != '' ? 'error-input' : '')} 
                                type="text" 
                                name="email" 
                                id="email" 
                                value={formData.email} 
                                onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} 
                            />
                            <p className = "error-text font-weigth-400">{formData.errorEmail}</p>
                        </div>
                    </div>

                    
                    <div className="d-flex flex-column gap-1 h-100">
                        <label htmlFor="message" className="color-white">{textToUse.form.labelMsg}</label>
                        <textarea  
                            className={"contact-input h-100 border-radius-1 p-05 bg-dark-purple-light color-white " + (formData.errorMessage != '' ? 'error-input' : '')}
                            name="message" 
                            id="message"  
                            value={formData.message} 
                            onChange={(e) => updateValueInput(e.currentTarget.id, e.currentTarget.value)} 
                        />
                        <p className = "error-text font-weigth-400">{formData.errorMessage}</p>
                    </div>
                    
                    <div className="w-100 d-flex gap-3 justify-content-flex-end align-items-center">
                        {
                            btnDisabled ? (
                                <p className="color-emerald">{textToUse.form.btnBloquedText} {timer}</p>
                            ) : null
                        }
                        <Button
                            type = "submit"
                            cssClasses={`px-sm-1 btn-size-2 ${btnDisabled ? 'animation-disabled' : ''}`}
                            disabled = {btnDisabled}
                            typeBtn = "primary-emerald"
                            icon="send"
                        />
                    </div>
                </form>
        </section>

        </>
    )
}

export default Contact;