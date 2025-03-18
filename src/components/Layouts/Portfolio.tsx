import NavBar from "../Navbar/Navbar";
import SectionProjects from "../PortfolioParts/ProjectAndSkills/SectionProjects";
import { IPortfolio } from "../../interfaces/Interfaces";
import Contact from "../PortfolioParts/Contact/Contact";
import ChooseLanguage from "../Steps/ChooseLanguage";


const Portfolio = ({language, setCurrentLanguage} : IPortfolio) => {
    return(
        <>
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

            <div className="lol">

            </div>

            <Contact
                language = {language}
            />

        </>
        
    )
}

export default Portfolio;