import { ICardProject, ITechnologieCard } from "../../interfaces/Interfaces"
import Icon from "../Icon";

const ProjectCard = ({image, description, resume, technologies, title, githubRedirection, youtubeRedirection}: ICardProject) => {    

    return(
        <div className="animation-fadeIn-opacity bg-black-transparent  border-radius-2 p-3 d-flex flex-column gap-3 ">
            <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-3">
                    <Icon
                        title = "github"
                        image = "src/assets/images/icons/github.png"
                        color = ""
                        redirection = {githubRedirection}
                        typeRedirection="_blank"
                    />

                    <Icon
                        title = "github"
                        image = "src/assets/images/icons/youtube.png"
                        color = ""
                        redirection = {youtubeRedirection}
                        typeRedirection="_blank"
                    />
                </div>

                <div className="container-project-img-card ">
                    <img src={image} alt = {title}  className="w-100 h-100 object-fit-cover border-radius-2"/>
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
                        <div className="inner-tech-card position-absolute d-none bg-grey bottom-140p right-0 p-3 border-radius-2 gap-3 flex-wrap w-200px ">
                            {
                                technologies.map((tech: ITechnologieCard) => (
                                    <Icon
                                        title = {tech.name}
                                        image = {tech.image}
                                        color = "bg-normal-purple"
                                    />
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