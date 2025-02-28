import { ICardProject, ITechnologieCard } from "../../interfaces/Interfaces"

const ProjectCard = ({image, date, description, resume, technologies, title}: ICardProject) => {
    
    return(
        <div>
            <div className="color-emerald">
                {title}
            </div>

            <div>
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
    )
}

export default ProjectCard;