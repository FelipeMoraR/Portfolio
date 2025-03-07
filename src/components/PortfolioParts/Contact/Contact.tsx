import { IContact } from "../../../interfaces/Interfaces";


const Contact = ({ language } : IContact) => {
    return(
        <section>
            <div className="d-flex flex-column gap-3 animation-scroll-test">
                <p className="color-ligth-purple font-size-8  font-weigth-700 text-center text-wrap-pretty">¿Necesitas alguien que resuelva tus problemas? </p>
                <p className="text-center font-size-3  font-weigth-400 color-white"> A solo un paso de tu solución, hablemos...</p>
            </div>
            
        </section>
    )
}

export default Contact;