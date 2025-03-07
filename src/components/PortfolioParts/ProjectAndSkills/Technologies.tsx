import { ITechnologieBody } from "../../../interfaces/Interfaces";

const Technologies = ({id, image, name, onClick}: ITechnologieBody) => {
    
    const handleClickTech = async (target: any) => {
        const container = target.closest('.container-tech');

        if(!container) return;

        container.classList.toggle('bright-border');
        
        if(onClick) onClick(id);
    }
    
    return (
        <div id = {`${id}`}  className="remove-efect-tap-highlight-mobile container-tech position-relative cursor-pointer no-select d-flex flex-column justify-content-center align-items-center border-radius-100p  p-05 border-solid-light-purple-dark-1 bg-dark-purple" onClick={(e) => handleClickTech(e.target)}>
            
            <img src={image} alt = {name} className="img-tech w-100 h-100 p-md-2 object-fit-scale-down filter-invert-100"/>
            
        </div>
    ) 
}

export default Technologies;