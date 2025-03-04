import { ICardProject, ITechnologieCard } from "../../interfaces/Interfaces"

const ProjectCard = ({image, description, resume, technologies, title, github, youtube, language}: ICardProject) => {
    const techText = {
        en: 'Technologies', 
        es: 'Tecnologías', 
        pt: 'tecnologias'
    }
    let techSelected;

    if(language == 'en' || language == 'es' || language == 'pt' ){
        techSelected = techText[language];
    }
    
    
    return(
        <div className="animation-fadeIn-opacity bg-black-transparent  border-radius-2 p-3 d-flex flex-column gap-3 z-index-1">
            <div className="d-flex flex-column gap-3">
                <div className="color-white">
                    iconGit

                    iconYT
                </div>

                <div className="container-project-img-card">
                    <img src={image} alt = {title}  className="w-100 h-100 object-fit-cover"/>
                </div>
            </div>
            
            <div className="d-flex flex-column gap-5">
                <div className="d-flex  gap-3 justify-content-space-between">
                    <p className="color-ligth-purple font-size-4 font-weigth-600 cursor-pointer no-select">
                        {title}
                    </p>

                    <div className="techs-card-btn position-relative bg-emerald-dark border-radius-2 color-white d-flex justify-content-center align-items-center px-3 cursor-pointer">
                        <span className = "material-symbols-outlined">
                            settings
                        </span>
                        <div className="inner-tech-card position-absolute d-none bg-grey bottom-110p right-0 p-3 border-radius-2 z-index-2">
                            {
                                technologies.map((tech: ITechnologieCard) => (
                                    <div key = {tech.id} className="color-white">
                                        {tech.id}
                                        {tech.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                <p className="color-white font-size-3 font-style-italic font-weigth-300">
                    {resume}
                </p>
                
            </div>
            
        </div>  
    )
}

export default ProjectCard;