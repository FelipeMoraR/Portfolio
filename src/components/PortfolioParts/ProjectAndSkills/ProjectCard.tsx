import { ICardProject, ITechnologieCard } from "../../../interfaces/Interfaces"
import Icon from "../../Icon";
import Tag from "../../tag";
import CarouselImg from "../../CarouselImg";

const ProjectCard = ({prevImage, description, resumen, galleryImg, technologies, title, githubRedirection, youtubeRedirection, isSelected, showCard, hideCard}: ICardProject) => {    
    return(
        <div className={"position-relative  flex-grow-0 flex-shrink-1 overflow-hidden animation-fadeIn-opacity border-solid-light-purple-dark-1  bg-gradint-purple-to-emerald border-radius-2 p-3 d-flex flex-column gap-3  " + (isSelected ? 'flex-basis-100p flex-order-0 card-project-transition' : 'flex-basis-368 flex-order-1 card-project cursor-pointer')}
            onClick={!isSelected ? showCard : undefined}
        >
            <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-3">
                    <Icon
                        id = {99} 
                        title = "github"
                        image = "src/assets/images/icons/github.png"
                        color = "white"
                        redirection = {githubRedirection}
                        typeRedirection="_blank"
                        hasToolTip = {false}  
                    />

                    <Icon
                        id = {100} 
                        title = "youtube"
                        image = "src/assets/images/icons/youtube.png"
                        color = "white"
                        redirection = {youtubeRedirection}
                        typeRedirection="_blank"
                        hasToolTip = {false}
                    />

                    {
                        isSelected ? (
                            <span 
                                className="material-symbols-outlined position-absolute top-0 right-0 m-6 cursor-pointer color-adaptative z-index-4"
                                onClick={hideCard}
                            >
                                close
                            </span>
                        ) : null
                    }
                    
                </div>


                {
                    isSelected ? (
                        <CarouselImg 
                            elements={galleryImg}
                            elementsPerPage={1}
                        />
                    ) : (
                        <div className="container-project-img-card ">
                            <img src={prevImage} alt = {title}  className="w-100 h-100 object-fit-cover border-radius-2"/>
                        </div>
                    ) 
                }
                
            </div>
            
            <div className="d-flex flex-column gap-3">
                <div className="d-flex  gap-3 justify-content-space-between">
                    <p className="color-ligth-purple font-size-5 font-weigth-600 text-transform-capitalize">
                        {title}
                    </p>
                </div>
                

                {
                    isSelected ? (
                        <p className="color-white font-size-3">
                            {description}
                        </p>
                    ) : (
                        <p className="color-white font-size-3">
                            {resumen}
                        </p>
                    ) 
                }
                
                {
                    isSelected ? (
                        <div className="d-flex gap-3">
                            {
                                technologies.map((tech: ITechnologieCard) => (
                                    <Icon
                                        key={tech.id}
                                        id={tech.id}
                                        title = {tech.name}
                                        image = {tech.image}
                                        color = "white"
                                        hasToolTip = {true} 
                                    />
                                ))
                            }
                        </div>

                    ) : (
                        <div className="d-flex gap-1">
                            {
                                technologies.map((tech: ITechnologieCard, index: number) => (
                                    index < 3 ? (
                                        <Tag
                                            key = {tech.id}
                                            name = {tech.name}
                                            typeTag = 'normal' 
                                        />
                                    ) : null
                                ))
                            }
                            
                            {
                                technologies.length > 3 ? (
                                    <Tag
                                        name = {`+${technologies.length - 3}`}
                                        typeTag = 'normal' 
                                    />
                                ) : null
                            }

                        </div>
                    ) 
                }
                
                
            </div>
            
        </div>  
    )
}

export default ProjectCard;