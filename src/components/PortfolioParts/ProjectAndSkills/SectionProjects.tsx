import { IPortfolioPart, ITechnologieBody, ICardProject } from "../../../interfaces/Interfaces";
import { translationsSectionProject } from "../../../assets/translations/translations";
import Technologies from "./Technologies";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const SectionProjects = ({language}: IPortfolioPart) => {
    const infoToRender = translationsSectionProject[language];
    const technologies = translationsSectionProject.technologies;
    const projects = infoToRender.projects;
    
    const [idTechSelected, setIdTechSelected] = useState<Array<number>>([]);
    const [projectsToShow, setProjectsToShow] = useState<Array<ICardProject>>([]);
    const timeoutsRef = useRef<number[]>([]);;


    const selectTech = (id: number) => {
        const existInArray = idTechSelected.some(tech => id == tech);
        
        if(existInArray){
            setIdTechSelected(prevArray => prevArray.filter(tech => tech !== id));
            return;
        }

        setIdTechSelected([...idTechSelected, id]);
        return
    }

    useEffect(() => {
        //Clear the previous timers
        timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
        timeoutsRef.current = [];

        setProjectsToShow([]);

        if(idTechSelected.length === 0){
            projects.forEach((project : ICardProject, index: number) => {
                const timeout = setTimeout(() => {
                    setProjectsToShow(prevProject => [...prevProject, project]);
                }, index * 150);
                
                //Saving that time out to eliminate in the end.
                timeoutsRef.current.push(timeout);
            });
            return
        }

        const projectFiltered = projects.filter((project: ICardProject) => {
            const catTechFounded = project.technologies.filter(tech => idTechSelected.some(techSelected => techSelected === tech.id));
            
            if(catTechFounded.length == 0) return;

            return project;
        });

        
        projectFiltered.forEach((project : ICardProject, index: number) => {
            const timeout = setTimeout(() => {
                setProjectsToShow(prevProject => [...prevProject, project]);
            }, index * 150);

            //Saving that time out
            timeoutsRef.current.push(timeout);
        });

        //This will execute when the code above ends, so, every time idTechSelected change the code above will execute and it will be cleanded at the end 
        return () => {
            timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
        };

    }, [idTechSelected])
    

    return (
        <section className="project-section max-w-1250 m-auto p-3 d-flex flex-column align-items-center gap-5 m-3" id = "project">
            <div className="color-white d-flex flex-column gap-3">
                <p className="project-title color-ligth-purple font-size-sm-8 animation-falling-down font-weigth-700 text-center text-wrap-pretty">{infoToRender.title}</p>
                <p className="project-subTitle text-center font-size-3 delay-02s opacity-0 animation-falling-down font-weigth-400">{infoToRender.subTitle}</p>
            </div>

            <div className="d-flex max-w-600 justify-content-center gap-4 flex-wrap delay-04s animation-fadeIn-opacity opacity-0">
                {
                    technologies.map((tech : ITechnologieBody) => ( 
                        <Technologies
                            key={tech.id}
                            id = {tech.id}
                            image = {tech.image}
                            name = {tech.name}
                            onClick={selectTech}
                        />
                    ))
                }                
            </div>

            <div className = "d-flex gap-6 max-w-1650 m-3 delay-06s animation-fadeIn-opacity opacity-0 flex-wrap justify-content-space-between justify-lg-content-center ">
                {   
                    projectsToShow.length === 0 ? (
                        <div className="d-flex flex-column align-items-center gap-3 color-white animation-fadeIn-opacity">
                            <span className = "material-symbols-outlined font-size-7 ">
                                sentiment_very_dissatisfied
                            </span>

                            <p>{infoToRender.notFound}</p>
                        </div>
                    ) : (
                        projectsToShow.map((project: ICardProject) => (
                            <ProjectCard
                                key={project.id}
                                id = {project.id}
                                description = {project.description}
                                image = {project.image}
                                technologies = {project.technologies}
                                title = {project.title}
                                githubRedirection = {project.githubRedirection}
                                youtubeRedirection = {project.youtubeRedirection}
                            />
                        )) 
                    )
                      
                }
            </div>
        </section>
    )
}


export default SectionProjects;
