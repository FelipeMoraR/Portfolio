import { ITechnologieBody } from "../../interfaces/Interfaces"

const Technologies = ({id, image, name, onClick}: ITechnologieBody) => {
    
    const handleClickTech = (target: any) => {
        const container = target.closest('.container-tech');
       
        if(!container) return;

        container.classList.toggle('bg-grey');
        if(onClick) onClick(id);
    }

    return (
        <div id = {`${id}`} key = {`${id}`} className="container-tech position-relative cursor-pointer no-select" onClick={(e) => handleClickTech(e.target)}>
            <div>
                <img src={image} alt = {name} />
            </div>

            <div className="color-lavanda">
                <p>{name}</p>
            </div>

            <div> 
                <p className="color-white">{id}</p>
            </div>
        </div>
    ) 
}

export default Technologies;