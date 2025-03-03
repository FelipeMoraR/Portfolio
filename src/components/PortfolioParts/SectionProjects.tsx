import { IPortfolioPart, ITechnologieBody, ICardProject } from "../../interfaces/Interfaces";
import { translationsSectionProject } from "../../assets/translations/translations";
import Technologies from "./Technologies";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


const SectionProjects = ({language}: IPortfolioPart) => {
    const infoToRender = translationsSectionProject[language];
    const technologies = translationsSectionProject.technologies;
    const projects = translationsSectionProject[language].projects;
    
    const [idTechSelected, setIdTechSelected] = useState<Array<number>>([]);
    const [projectsToShow, setProjectsToShow] = useState<Array<ICardProject>>(projects);
    
    
    useEffect(() => {
        if(idTechSelected.length === 0){
            setProjectsToShow(projects);
            return
        }

        const projectFiltered = projects.filter((project: ICardProject) => {
            const catTechFounded = project.technologies.filter(tech => idTechSelected.some(techSelected => techSelected === tech.id));
            
            if(catTechFounded.length == 0) return;

            return project;
        });

        setProjectsToShow(projectFiltered);
    }, [idTechSelected])
    
    

    const selectTech = (id: number) => {
        const existInArray = idTechSelected.some(tech => id == tech);
        
        if(existInArray){
            setIdTechSelected(prevArray => prevArray.filter(tech => tech !== id));
            return;
        }

        setIdTechSelected([...idTechSelected, id]);
        return
    }

    return (
        <div className="project-section d-flex flex-column align-items-center gap-6 m-3">
            <div className="color-white d-flex flex-column gap-3">
                <h1 className="project-title color-ligth-purple font-size-8">{infoToRender.title}</h1>
                <h2 className="project-subTitle text-center ">{infoToRender.subTitle}</h2>
            </div>

            <div className="d-flex max-w-600 justify-content-center gap-3 flex-wrap">
                {
                    technologies.map((tech : ITechnologieBody) => (
                        <Technologies
                            id = {tech.id}
                            image = {tech.image}
                            name = {tech.name}
                            onClick={selectTech}
                        />
                    ))
                }                
            </div>

            <div className = "d-flex gap-3 m-3 p-3">
                {
                    projectsToShow.map((project: ICardProject) => (
                        <ProjectCard
                            date = {project.date}
                            description = {project.description}
                            image = {project.image}
                            resume = {project.resume}
                            technologies = {project.technologies}
                            title = {project.title}
                        />
                    ))
                }
            </div>
        </div>
    )
}


export default SectionProjects;
