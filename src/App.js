import './App.css';
import {HeroContainer} from "./components/conteiners/HeroContainer";
import {SkillsContainer} from "./components/conteiners/SkillsContainer";
import {FooterContainer} from "./components/conteiners/FooterContainer";
import {ProjectsContainer} from "./components/conteiners/ProjectsContainer";

export function App() {


    return (
        <>
            <HeroContainer />
            <SkillsContainer />
            <ProjectsContainer />
            <FooterContainer/>
        </>
    )
}
