import NavBar from "../Navbar/Navbar";
import SectionProjects from "../PortfolioParts/ProjectAndSkills/SectionProjects";
import { IPortfolio } from "../../interfaces/Interfaces";
import Contact from "../PortfolioParts/Contact/Contact";

const Portfolio = ({language} : IPortfolio) => {
    
    return(
        <>
            <NavBar
                language = {language}
            />

            <SectionProjects
                language = {language}
            />

            <div className="lol">

            </div>

            <Contact
                language = {language}
            />

        </>
        
    )
}

export default Portfolio;