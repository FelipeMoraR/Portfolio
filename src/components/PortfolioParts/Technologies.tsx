import { ITechnologieBody } from "../../interfaces/Interfaces"

const Technologies = ({id, image, name, onClick}: ITechnologieBody) => {
    
    const handleClickTech = async (target: any) => {
        const container = target.closest('.container-tech');

        if(!container) return;
        container.classList.toggle('bg-glowing');
        if(onClick) onClick(id);
    }

    return (
        <div id = {`${id}`} key = {`${id}`} className="container-tech position-relative cursor-pointer no-select d-flex flex-column justify-content-center align-items-center border-radius-100p p-1 " onClick={(e) => handleClickTech(e.target)}>
            
            <img src={image} alt = {name} className="img-tech border-radius-100p w-100 h-100 opacity-05"/>
            

            <div className="color-emerald tech-text font-size-2 opacity-0">
                <p>{name}</p>
            </div>
        </div>
    ) 
}

export default Technologies;