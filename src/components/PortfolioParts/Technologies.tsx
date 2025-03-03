import { ITechnologieBody } from "../../interfaces/Interfaces"

const Technologies = ({id, image, name, onClick}: ITechnologieBody) => {
    
    const handleClickTech = async (target: any) => {
        const container = target.closest('.container-tech');

        if(!container) return;
        container.classList.toggle('borde-brillante');
        if(onClick) onClick(id);
    }
    
    return (
        <div id = {`${id}`}  className="container-tech position-relative cursor-pointer no-select d-flex flex-column justify-content-center align-items-center border-radius-100p bg-lavanda-dark border-solid-transparent-1" onClick={(e) => handleClickTech(e.target)}>
            
            <img src={image} alt = {name} className="img-tech  w-100 h-100 p-2 object-fit-scale-down"/>
            
        </div>
    ) 
}

export default Technologies;