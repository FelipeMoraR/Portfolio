import { IPortfolioPart, ITechnologieBody } from "../../interfaces/Interfaces";
import { translationsSectionProject } from "../../assets/translations/translations";
import Technologies from "./Technologies";
import { useEffect, useState } from "react";

const SectionProjects = ({language}: IPortfolioPart) => {
    const [idTechSelected, setIdTechSelected] = useState<Array<number>>([]);
    const infoToRender = translationsSectionProject[language];
    const technologies = translationsSectionProject.technologies;

    

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
        console.log('new tech selected', idTechSelected);
    }, [idTechSelected])

    return (
        <div>
            <div>
                <h1>{infoToRender.title}</h1>
            </div>

            <div className="d-flex gap-3">
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
        </div>
    )
}


export default SectionProjects;
