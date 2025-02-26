import NavBar from "../Navbar/Navbar";
import SectionProjects from "../SectionPortfolio/SectionProjects";
const Portfolio = () => {
    return(
        <>
            <NavBar/>
            
            <h1 className="color-white">Portafolio XDD</h1>

            <SectionProjects/>

            <div className="min-h-100vh" id = "texto3">
                <h3 className = "color-white">texto 3</h3>
            </div>
        </>
        
    )
}

export default Portfolio;