import NavBar from "../Navbar/Navbar";
import SectionProjects from "../PortfolioParts/ProjectAndSkills/SectionProjects";
import { IPortfolio } from "../../interfaces/Interfaces";
import Contact from "../PortfolioParts/Contact/Contact";
import ChooseLanguage from "../Steps/ChooseLanguage";
import Certificates from "../PortfolioParts/Certificates/Certificates";

const Portfolio = ({language, setCurrentLanguage} : IPortfolio) => {
    return(
        <main>
            <ChooseLanguage
                setCurrentLanguage = {setCurrentLanguage}
                typeView = "page"
                language = {language}
            />

            <NavBar
                language = {language}
            />

            <SectionProjects
                language = {language}
            />

            <Certificates
                language = {language}
            />

            
            

            <Contact
                language = {language}
            />

        </main>
        
    )
}

export default Portfolio;