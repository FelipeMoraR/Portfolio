import { ICardProject, ITechnologieCard } from "../../../interfaces/Interfaces"
import Icon from "../../Icon";
import Tag from "../../tag";
import CarouselImg from "../../CarouselImg";
import github from '../../../assets/images/icons/github.png';
import youtube from '../../../assets/images/icons/youtube.png';
import redirection from '../../../assets/images/icons/redirection.png';

const ProjectCard = ({prevImage, description, resumen, galleryImg, technologies, title, githubRedirection, youtubeRedirection, externalLink, isSelected, showCard, hideCard}: ICardProject) => {    
    return(
        <div className={"position-relative  flex-grow-0 flex-shrink-1 animation-fadeIn-opacity border-solid-light-purple-dark-1  bg-gradint-purple-to-emerald border-radius-2 p-3 d-flex flex-column gap-3 tech-selected-size " + (isSelected ? 'flex-basis-100p flex-order-0 card-project-transition ' : 'flex-basis-368 flex-order-1 card-project cursor-pointer')}
            onClick={!isSelected ? showCard : undefined}
        >
            <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-3 min-h-35">
                    {
                        githubRedirection !== '' ? (
                            <Icon
                                id = {99} 
                                title = "github"
                                image = {github}
                                color = "white"
                                redirection = {githubRedirection}
                                typeRedirection="_blank"
                                hasToolTip = {false}  
                            />
                        ) : null
                    }
                    
                    {
                        youtubeRedirection !== '' ? (
                            <Icon
                                id = {100} 
                                title = "youtube"
                                image = {youtube}
                                color = "white"
                                redirection = {youtubeRedirection}
                                typeRedirection="_blank"
                                hasToolTip = {false}
                            />
                        ) : null
                    }
                        
                    {
                        externalLink !== '' ? (
                            <Icon
                                id = {101} 
                                title = "link"
                                image = {redirection}
                                color = "white"
                                redirection = {externalLink}
                                typeRedirection="_blank"
                                hasToolTip = {false}
                            />
                        ) : null
                    }
                    

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
                    !isSelected ? (
                        <div className="container-project-img-card ">
                            <img src={prevImage} alt = {title}  className="w-100 h-100 object-fit-cover border-radius-2"/>
                        </div>
                    ) : null
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
                        <p className="color-white font-size-3 white-space-pre-line">
                            {description}
                        </p>
                    ) : (
                        <p className="color-white font-size-3 min-h-38">
                            {resumen}
                        </p>
                    ) 
                }

{
                    isSelected ? (
                        <div className="d-flex gap-3 flex-wrap">
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
                                            typeTag = 'normal-tag' 
                                        />
                                    ) : null
                                ))
                            }
                            
                            {
                                technologies.length > 3 ? (
                                    <Tag
                                        name = {`+${technologies.length - 3}`}
                                        typeTag = 'normal-tag' 
                                    />
                                ) : null
                            }

                        </div>
                    ) 
                }
                
                {
                    isSelected ? (
                        <CarouselImg 
                            elements={galleryImg}
                            elementsPerPage={1}
                        />
                    ) : null
                }

                
                
                
            </div>
            
        </div>  
    )
}

export default ProjectCard;