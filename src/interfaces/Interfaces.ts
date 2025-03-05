export interface ISteps {
    language: string;
    isSkiped?: boolean
}

export interface IPortfolio {
    language: string;
}

export interface INavbar {
    language: string;
}

export interface INavbarElement {
    index: number;
    sectionToView: string; 
    icon: string; 
    tooltip: string; 
}

export interface IPortfolioPart {
    language: string;
}

export interface ITechnologie {
    id: number;
}

export interface ITechnologieBody extends ITechnologie {
    name: string;
    image: string;
    onClick: (id: number) => void;
}

export interface ITechnologieCard extends ITechnologie {
    name: string;
    image: string; 
}

export interface ICardProject{
    title: string;
    image: string;
    resume: string;
    description: string;
    technologies: Array<ITechnologieCard>;
    githubRedirection: string;
    youtubeRedirection?:string; 
}



export interface IButton {
    text?: string;
    type: string;
    cssClasses: string;
    onClick: () => void;
}


export interface IChooseLanguage {
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>; 
    setIsLanguageChoosed: React.Dispatch<React.SetStateAction<boolean>>; 
}

export interface ILoader {
    language: string;
    currentStep: React.ReactNode;
}

export interface IProject {
    title: string;
    enterprice: string;
    image: string;
}

export interface IIcon {
    title: string;
    image: string;
    color: string;
    redirection?: string;
    typeRedirection?: string;
}
