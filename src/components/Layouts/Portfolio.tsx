import NavBar from "../Navbar/Navbar";
import SectionProjects from "../PortfolioParts/SectionProjects";
import { IPortfolio } from "../../interfaces/Interfaces";

const Portfolio = ({language} : IPortfolio) => {
    
    return(
        <>
            <NavBar
                language = {language}
            />

            <SectionProjects
                language = {language}
            />


        </>
        
    )
}

export default Portfolio;