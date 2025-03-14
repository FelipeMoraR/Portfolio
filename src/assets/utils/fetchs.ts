import emailjs from 'emailjs-com';

export const emailJsFetch = async (event: React.FormEvent<HTMLFormElement>, emailJsId: string) => {
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